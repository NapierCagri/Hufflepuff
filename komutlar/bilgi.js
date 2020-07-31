const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        let kis = message.mentions.users.first() || message.author; 
        var Durum = kis.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
        if(message.author.id === kis.id) {
        const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(kis.username, kis.avatarURL)
      .setColor('#DFBF20')
      .addField('Kullanıcı Adı:', kis.tag)
      .addField("RP Adı: ", `<@${kis.id}>`)
      .addField('ID:', kis.id)
      .addField('Discord\'a Katılma Tarihi: ', kis.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', kis.presence.game ? kis.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', kis.bot ? '\n Evet' : 'Hayır')
    
      return message.channel.send("<@" + message.author.id + ">", {embed: kullanicibilgimk});
      }
      
      else {
        
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(kis.username, kis.avatarURL)
      .setColor('#DFBF20')
      .addField('Kullanıcı Adı:', kis.tag)
      .addField("RP Adı: ", `<@${kis.id}>`)
      .addField('ID:', kis.id)
      .addField('Discord\'a Katılma Tarihi: ', kis.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', kis.presence.game ? kis.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', kis.bot ? '\n Evet' : 'Hayır')
      .addField("İsteyen kişi: ", message.author.tag)
    
      return message.channel.send("<@" + message.author.id + ">", {embed: kullanicibilgimk}); }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Kişi hakkında bilgi verir.',
  usage: '!bilgi <kişi>'
};