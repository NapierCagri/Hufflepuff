const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyurmadın ki');

    var generalChannel = client.channels.get("705888917517238305")
    generalChannel.send("@everyone " + mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yduyuru',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
