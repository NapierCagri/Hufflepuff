const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://i.pinimg.com/originals/3b/2f/85/3b2f85d2beb850609a53b6c2881cd62d.gif",
    "https://66.media.tumblr.com/tumblr_m2y9iiqGfM1rurwm3o1_400.gif",
    "https://media1.tenor.com/images/9c55e5d34bc0072f7ff5319bc9b14a74/tenor.gif",
    "https://i.pinimg.com/originals/cd/3d/36/cd3d36d1862e7daba5f8d17bc67c3b1a.gif",
    "https://i.pinimg.com/originals/79/fe/16/79fe167c71aa992ba3a0c4751adf6a2e.gif",
    "https://66.media.tumblr.com/d97a7440b330068fa597fb40d91fa11c/tumblr_pjvo5u5hH31skl1u9o2_500.gif",
    "https://38.media.tumblr.com/7f71040fb5d3e2a7ce0c68cb1d6500c5/tumblr_nksz31wN2g1rn4qwao2_400.gif"
    
  ]
  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kime sarılacağımı belirtmedin!!!")
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("<@" + olduren.id + ">, <@" + kisi.id + "> kişisine sarıldı :hearts:" ,{file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};