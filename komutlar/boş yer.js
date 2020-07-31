const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  
  
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['deneme'],
  permLevel: 0
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};