const Discord = require("discord.js");
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
  var gif = [
    "https://media.tenor.com/images/061516fea50942898a0e5df9181e03d2/tenor.gif",
    "https://www.nedenben.com/uploads/editorFiles/images/D73C5C33-4923-469A-A498-2E0C7D758C21.gif",
    "https://thumbs.gfycat.com/CautiousCorruptBandicoot-max-1mb.gif"
  ];
  let kisi = message.mentions.users.first();
  if (!kisi) return message.channel.send("Kimi pişireceğimi belirtmedin!!!");
  let pisiren = message.author;
  var gonder = gif[Math.floor(Math.random() * gif.length)];
  message.channel.send(
    "CZN <@" + pisiren.id + ">, <@" + kisi.id + "> kişisini pişirip yedi!",
    { file: gonder }
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "pişir",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz [yazdırmak istediğiniz şey]"
};
