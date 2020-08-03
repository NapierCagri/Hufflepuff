const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://media.tenor.com/images/23aefef436e9b9c3a608ab8e09cf8b3b/tenor.gif",
    "https://media2.giphy.com/media/CxaZVDtc8yg4o/source.gif",
    "https://i.pinimg.com/originals/68/fe/8e/68fe8e497e049b3e41c432297aaf5328.gif",
    "https://media.tenor.com/images/3036d52f18d24196730375548fd11a59/tenor.gif",
    "https://66.media.tumblr.com/96cc8e8d7f8aa1591c497368ee0afdad/tumblr_olcudi1BLl1w5lssao1_1280.gif",
    "https://66.media.tumblr.com/6bac5a056e08867e39afc44ca8785c69/tumblr_p6bfc0m2hS1qcxzu2o3_540.gif"
    
  ]
  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kimi seveyim gülllüm")
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("<@" + olduren.id + ">, <@" + kisi.id + "> kişisini seviyooor :hearts:" ,{file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sev',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
