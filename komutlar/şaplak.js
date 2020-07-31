const Discord = require("discord.js");
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
  var gif = [
   "https://thumbs.gfycat.com/PaleEnchantingGalapagoshawk-size_restricted.gif",
    "https://thumbs.gfycat.com/TastyBarrenAtlanticsharpnosepuffer-size_restricted.gif",
    "https://cdn3.whatculture.com/images/2015/02/Benny-Hill.gif",
  ];
  let kisi = message.mentions.users.first();
  if (!kisi)
  return message.channel.send("Kimi şaplaklayacağımı belirtmedin!!!");
  let pisiren = message.author;
  var gonder = gif[Math.floor(Math.random() * gif.length)];
  message.channel.send(
    "<@" +
      pisiren.id +
      ">, <@" +
      kisi.id +
      "> kişisinin kel kafasına şaplak attı!",
    { file: gonder }
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["saplak"],
  permLevel: 0
};

exports.help = {
  name: "şaplak",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz [yazdırmak istediğiniz şey]"
};
