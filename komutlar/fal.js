const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
   let mesaj = args.slice(0).join(' ');
  const kis = message.author
    var msj = [
      "Kesinlikle, hiç şüphen olmasın!",
      "Muhtemelen olacak, rahat ol",
      "Olur olur sıkma canını",
      "Olacak gibi ya",
      "Galiba olur",
      "Yaaaaaaaaaaani olursa güzel olur, olmazsa da canın sağolsun",
      "Umutlarını yok etmek istemem ama sanki olmayacak gibi",
      "Bence olmaz ya boşver",
      "Yok yok olmaz",
      "Ümidi kes gitsin",
      "Maalesef olmayacak",
      "Kesinlikle olmayacak",
      "OLMAYACAK! OLURSA DA ADAM DEĞİLİM!"
    ];

    var yanıt = msj[Math.floor(Math.random() * msj.length)];
    const embedd = new Discord.RichEmbed()
      .setColor('#DFBF20')
      .addField(kis.username + ": ", mesaj)
      .addField("Dora: ", yanıt)
    message.channel.send("<@" + kis.id + ">", embedd)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['fal'],
  permLevel: 0
};

exports.help = {
  name: 'fal',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};