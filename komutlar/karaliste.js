const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
let [kisi, sebep] = args.join(" ").split(" - ");
  if (!message.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) return message.reply('Gerekli izin yok')
if (!kisi) return message.channel.send(`Bir kişi yazmalısın.`)
  if (!sebep) return message.channel.send(`Bir sebep yazmalısın.`)
var kanal = client.channels.get("715992366586134630")
message.delete();
  const embed = new Discord.RichEmbed();
      embed.setColor('#DFBF20')
      embed.setTitle('YASAKLANDI')
      .addField("Yasaklı Kişi: ", kisi)
      .addField("Yasaklanma Sebebi: ", sebep)
    kanal.send(embed);

};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['karaliste'],
  permLevel: 0
};

exports.help = {
  name: 'karaliste',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};