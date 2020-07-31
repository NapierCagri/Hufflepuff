const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { randomRange, verify } = require("../util/Util.js");

exports.run = async (client, message, args) => {
  this.fighting = new Set();

  let opponent = message.mentions.users.first();
  if (!opponent) return message.reply("Adam seçmeden nereye dalıyon öküz");

  if (opponent.bot)
    return message.reply("He aynen botlar da diyordu ki gel bana dal");
  if (opponent.id === message.author.id)
    return message.reply("Kim demiş insan kendine saldıramaz diye bizim zamanımızda oluyordu");
  if (this.fighting.has(message.channel.id))
    return message.reply("Kanal sayısına göre savaş yapabilirsin.");
  this.fighting.add(message.channel.id);
  try {
    if (!opponent.bot) {
      await message.channel.send(
        `${opponent}, sana saldırcakmış istiyon mu?(\`evet\` veya \`hayır\` olarak cevap ver)`
      );
      const verification = await verify(message.channel, opponent);
      if (!verification) {
        this.fighting.delete(message.channel.id);
        return message.channel.send(`Adam istemedi napalım kader`);
      }
    }
    let userHP = 250;
    let oppoHP = 250;
    let userTurn = false;
    let guard = false;
    const reset = (changeGuard = true) => {
      userTurn = !userTurn;
      if (changeGuard && guard) guard = false;
    };
    const dealDamage = damage => {
      if (userTurn) oppoHP -= damage;
      else userHP -= damage;
    };
    const forfeit = () => {
      if (userTurn) userHP = 0;
      else oppoHP = 0;
    };
    while (userHP > 0 && oppoHP > 0) {
      // eslint-disable-line no-unmodified-loop-condition
      const user = userTurn ? message.author : opponent;
      let choice;
      if (!opponent.bot || (opponent.bot && userTurn)) {
        await message.channel.send(stripIndents`
                                                ${user}, ne yapmak istersin? \`flipendo\`, \`protego\`, \`avada\`, veya \`kaç\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
        const filter = res =>
          res.author.id === user.id &&
          ["flipendo", "protego", "avada", "kaç"].includes(
            res.content.toLowerCase()
          );
        const turn = await message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000
        });
        if (!turn.size) {
          await message.reply(`ARAYA GİRMEYİN OLM`);
          continue;
        }
        choice = turn.first().content.toLowerCase();
      } else {
        const choices = ["flipendo", "protego", "avada"];
        choice = choices[Math.floor(Math.random() * choices.length)];
      }
      if (choice === "flipendo") {
        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
        await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
        dealDamage(damage);
        reset();
      } else if (choice === "protego") {
        await message.channel.send(
          `Mavi bir kalkan oluştu ve ${user} kurtuldu!`
        );
        guard = true;
        reset(false);
      } else if (choice === "avada") {
        const miss = Math.floor(Math.random() * 4);
        if (!miss) {
          const damage = randomRange(100, guard ? 150 : 300);
          await message.channel.send(
            `Şu iman gücüne bak bee... ${user} yeşil ışığı gönderdiği gibi **${damage}** hasar vurdu! Eferm.`
          );
          dealDamage(damage);
        } else {
          await message.channel.send(
            `Ulan olum sen kim Avada kim? Git biraz büyü öğren. Siz bizim ${user}'a bakmayın abisi, yeni öğreniyor`
          );
        }
        reset();
      } else if (choice === "kaç") {
        await message.channel.send(`${user} TAM BİR KOOORKAK TAAAVUK KOOOORKAK TAAAAAAVUK`);
        forfeit();
        break;
      } else {
        await message.reply("Olum bak oraya napcağını yazdım, git düzgün yap gel.");
        continue;
      }
    }
    this.fighting.delete(message.channel.id);
    const winner = userHP > oppoHP ? message.author : opponent;
    return message.channel.send(
      `Helal len, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`
    );
  } catch (err) {
    this.fighting.delete(message.channel.id);
    throw err;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["1vs1", "1v1", "savaş"],
  permLevel: `Yetki gerekmiyor.`,
  kategori: "eğlence"
};

exports.help = {
  name: "düello",
  description: "İstediğiniz bir kişi ile düello atarsınız!",
  usage: "düello <@kullanıcı>"
};
