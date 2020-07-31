const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  const db = require("quick.db");

  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS"))
    return message.reply("Gerekli izin yok");
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(
      `Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`
    );

  let user = message.mentions.users.first();
  //let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  if (message.mentions.users.size < 1)
    return message.reply("Lütfen banlamak istediğiniz üyeyi etiketleyin");
  if (user.id === message.author.id)
    return message.reply("Kendini mi banlayacaksın?");
  //  if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

  const embed = new Discord.RichEmbed().setColor("#DFBF20");
  embed
    .setTitle("BANLANDI")
    .addField("Banlanmayı hak eden varlık:", `${user.tag}`)
    .addField("Banlayan porsuk:", `<@${message.author.id}>`);
  if (user.id === "417413382766067724") {
    message.channel.send(
      "Bundan sonra Mert'i banlayan karşısında beni bulur ",
      {
        file:
          "https://i.pinimg.com/originals/11/04/6f/11046f8d10d61d455a210103fc300f4d.gif"
      }
    );
  } else {
    if (!message.guild.member(user).bannable)
      return message.reply("Yetkilileri yasaklayamam!");
    message.guild.ban(user);

    var bann = [
      "https://3.bp.blogspot.com/-K1pvWl69n0w/XHSAjoGfd8I/AAAAAAAApsw/pOdynwEsSCMyvgDbPHRxrDFJqkkrZtCbwCLcBGAs/s1600/ezgif-3-fae19c1ad69c.gif",
      "https://pa1.narvii.com/6308/9b949284eb177f025f8d56a06c8bc4d6e55b0f43_00.gif",
      "https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2016/03/giphy-1-1457538878.gif",
      "https://pa1.narvii.com/6770/30078cda3e3537f1656f55c03b688f449063ef2b_hq.gif"
    ];
    var bank = bann[Math.floor(Math.random() * bann.length)];
    let mentionedUser = message.mentions.users.first();
    message.channel.send(mentionedUser.tag + ", GÖRÜŞMEMEK ÜZERE", {
      file: bank
    });
    var gn = client.channels.get("706126104204673069");
    gn.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban", "avada"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "yasakla",
  description: "İstediğiniz kişiyi sunucudan yasaklar.",
  usage: "yasakla <@kullanıcı> <sebep>"
};
