const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://thumbs.gfycat.com/AblePlasticGrouper-max-1mb.gif",
    "https://cms.entertainment.ie/wp-content/uploads/2019/05/tumblr_ndg9op7s0Q1qcjzvuo1_500.gif"
    
  ]
  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kimi öldüreceğimi belirtmedin!!!")
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("<@" + olduren.id + ">, <@" + kisi.id + "> kişisini öldürdü!" ,{file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};