const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kimin elini öpeyim???")
  var el = [
    "a",
    "a",
    "a",
    "b",
  ]
  var yanıt = el[Math.floor(Math.random() * el.length)];
  
  if(yanıt === "a") {
    message.reply("<@" + kisi.id+ "> kişisinin elini öptün. Al sana para...", {file: "https://media.tenor.com/images/dabe01deff127825daeb98c12bda8fb3/tenor.gif"} )
  }
  else {
    message.reply("kardeş önce bizim elimizi öpeceksin, sonra başkasının!", {file: "https://cf.kizlarsoruyor.com/q10014029/47c83384-c580-4797-acd5-56fc9a929c68-m.jpg"})
  }
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'elöp',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};