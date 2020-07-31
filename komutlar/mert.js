const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

let kisi = message.mentions.users.first()
if (!kisi) return message.channel.send(`Kime vereceğimi söylemedin ki`);
let rol1 = "710805925476171846"
let rol2 = "707617267516440596"
let rol3 = "702139814581108816"
let rol4 = "697756408636112986"
let rol5 = "710297722393067601"
let rol6 = "702140816231104652"

kisi.addRole(rol1)
kisi.addRole(rol2)
kisi.addRole(rol3)
kisi.addRole(rol4)
kisi.addRole(rol5)
kisi.addRole(rol6)
message.reply("MERT'i ALDIK SONUNDA")
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mert',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};