const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Sende bu yetki yok ama üzülme, sana kurabiye verebilirim');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kimi takıma alacağımı söylemedin ki`);

    let aRole = "713135648885964820";
   let bRole = "";
  
  
  
  
  
    if (rMember.roles.has(aRole)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu zaten takımda ya').setColor('#DFBF20'));
    await (rMember.addRole(aRole))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye <@&713135648885964820> isimli yetki başarıyla verildi! :white_check_mark:`).setColor('#DFBF20'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['quidditch', 'qui'],
  permLevel: 0,
};
exports.help = {
  name: 'quidditch',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};
