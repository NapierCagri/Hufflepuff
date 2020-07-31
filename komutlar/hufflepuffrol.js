const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Sende bu yetki yok ama üzülme, sana kurabiye verebilirim');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kime vereceğimi söylemedin ki`);

    let aRole = "706527817986474025";
   let bRole = "";
  
  
  
  
  const ayy = bot.emojis.find(emoji => emoji.name === "hufpuf");
    if (rMember.roles.has(aRole)) return message.channel.send(`Zaten Hufflepuff\'a almışız ${ayy} `);
    await (rMember.addRole(aRole))
    
    message.channel.send(`${rMember}, Hufflepuff'a hoşgeldin! ${ayy}`)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['huff'],
  permLevel: 0,
};
exports.help = {
  name: 'huff',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};
