const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://thumbs.gfycat.com/AdoredAmusedCaribou-size_restricted.gif",
    "https://media1.tenor.com/images/77e16569edf6221ca5e7619c65d6089a/tenor.gif", //lpg
    "https://thumbs.gfycat.com/AlienatedFearfulEchidna-small.gif",
    "https://media.tenor.com/images/7b1c1c7b45226f1198000f86f6445a24/tenor.gif",
    "https://thumbs.gfycat.com/AlienatedFearfulEchidna-small.gif",
    "https://media.tenor.com/images/7b1c1c7b45226f1198000f86f6445a24/tenor.gif",
    "https://thumbs.gfycat.com/AdoredAmusedCaribou-size_restricted.gif",

  ]
  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kimi öpiyim gülllüm")
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("<@" + olduren.id + ">, <@" + kisi.id + "> kişisini öptüüü :hearts:" ,{file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
