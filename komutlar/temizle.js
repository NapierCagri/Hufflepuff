const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
	const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount+1
  }).then(messages => message.channel.bulkDelete(messages));
    const mesaj = message.author.username;
    const embed = new Discord.RichEmbed()
  .setColor("#DFBF20")
  embed.setTitle('Mesajlar Silindi!')
  .addField('Silinen mesaj sayısı:', messagecount)
  .addField('Silen kişi:', `<@${message.author.id}>`)
  message.channel.send(embed)
  
  message.delete(5000);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle', 'sil', 'mesajsil', 'clear', 'purge'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};