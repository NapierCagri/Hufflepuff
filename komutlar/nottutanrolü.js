const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Sende bu yetki yok ama üzülme, sana kurabiye verebilirim');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kime vereceğimi söylemedin ki`);

    let aRole = "697756408636112986";
  
  
  
  
  
    if (rMember.roles.has(aRole)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bunda zaten bu rol var ya').setColor('#DFBF20'));
    await (rMember.addRole(aRole))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye <@&697756408636112986> isimli yetki başarıyla verildi! :white_check_mark:`).setColor('#DFBF20'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['not'],
  permLevel: 0,
};
exports.help = {
  name: 'not',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};
