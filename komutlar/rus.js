//var anasonuc = Math.floor(Math.random() * 101)
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
var ol = Math.floor(Math.random() * 7)

var say = 1

   for(var i = 1; i < Math.floor(Math.round(ol)); i++) { 
     
      message.reply(say + ". atışın, başarılı!")
      message.channel.send()
      message.channel.send()
      message.channel.send()
      message.channel.send()
      say = say + 1
   }
  
  //message.reply("BANG! " + say + ". ATIŞTA ÖLDÜN!")
  const embed = new Discord.RichEmbed();
      embed.setColor('#DFBF20')
      embed.setTitle('BANG! ' + say + ". ATIŞTA ÖLDÜN!")
      embed.setImage("https://i.pinimg.com/originals/4c/8b/4b/4c8b4b70733e99b757ac681bb910ae04.gif")
message.reply(embed)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rusruleti'],
  permLevel: 0
};

exports.help = {
  name: 'rus',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
