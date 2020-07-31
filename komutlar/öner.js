const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  var generalChannel = client.channels.get("706120146124668939")
  const embed = new Discord.RichEmbed();
  embed.setColor('#DFBF20')
      embed.setTitle('ÖNERİ')
      embed.setDescription("Öneri: " + mesaj + "\nGönderen kişi: " + message.author.tag)
  generalChannel.send("<@689338408593653810>", {embed: embed});
  message.reply("öneriniz alınmış ve <#706120146124668939> kanalına gönderilmiştir")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['öner'],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
