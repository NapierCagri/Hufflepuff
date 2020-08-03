const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://pa1.narvii.com/6413/7f14b5dc0c429b0f08bb34e829d63c050f4b054e_hq.gif",
    "https://media2.giphy.com/media/Rgc7pvWsESXgNOsMBL/200.gif",
    "https://i.pinimg.com/originals/e8/b7/65/e8b765d47282c8a43b8ed38457ade6f8.gif",
    "https://media1.tenor.com/images/9098f83c27151d9a7060481ea0ec9e4d/tenor.gif",
    
    
  ]
  
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("İŞTEEEEEE <@" + olduren.id + "> DANS PİSTİNDE", {file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dans',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
