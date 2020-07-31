const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bir seçim yapmalısın. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s');

  var secim = 
       [
         "t",
         "k",
         "m",
         "l",
         "s",
       ]

    var son = secim[Math.floor(Math.random()*secim.length)];
  if (mesaj === son) return message.reply('HEEEY İKİMİZ DE AYNI ŞEYİ SEÇTİK!');
    if(mesaj === "t") {
      if(son === "k") {
        message.reply("Kağıt! Kağıt taşı sarar. Ben kazandım")
      }
      else if(son === "m") {
        message.reply("Makas! Her zamanki gibi taş makası ezer. Sen kazandın")
      }
      else if(son === "l") {
        message.reply("Kertenkele! Taş kertenkeleyi ezer. Sen kazandın")
      }
      else if(son === "s") {
        message.reply("Spock! Spock taşı buharlaştırır. Ben kazandım")
      }
      else {
      message.reply("Lütfen geçerli bir değer gir. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s")
      }
    
    }
else  if(mesaj === "k") {
      if(son === "t") {
        message.reply("Taş! Kağıt taşı sarar. Sen kazandın")
      }
      else if(son === "m") {
        message.reply("Makas! Makas kağıdı keser. Ben kazandım")
      }
      else if(son === "l") {
        message.reply("Kertenkele! Kertenkele kağıdı yer. Ben kazandım")
      }
      else if(son === "s") {
        message.reply("Spock! Kağıt Spock'ı yanıltır. Sen kazandın")
      }
      else {
      message.reply("Lütfen geçerli bir değer gir. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s")
      }
    
    }
else  if(mesaj === "m") {
      if(son === "k") {
        message.reply("Kağıt! Makas kağıdı keser. Sen kazandın")
      }
      else if(son === "t") {
        message.reply("Taş! Her zamanki gibi taş makası ezer. Ben kazandım")
      }
      else if(son === "l") {
        message.reply("Kertenkele! Makas kertenkelenin başını ezer. Sen kazandın")
      }
      else if(son === "s") {
        message.reply("Spock! Spock makası parçalar. Ben kazandım")
      }
      else {
      message.reply("Lütfen geçerli bir değer gir. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s")
      }
    
    }
else  if(mesaj === "l") {
      if(son === "k") {
        message.reply("Kağıt! Kertenkele kağıdı yer. Sen kazandın")
      }
      else if(son === "m") {
        message.reply("Makas! Makas kertenkelenin başını keser. Ben kazandım")
      }
      else if(son === "t") {
        message.reply("Taş! Taş kertenkeleyi ezer. Ben kazandım")
      }
      else if(son === "s") {
        message.reply("Spock! Kertenkele Spock'ı zehirler. Ben kazandım")
      }
      else {
      message.reply("Lütfen geçerli bir değer gir. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s")
      }
    
    }
else  if(mesaj === "s") {
      if(son === "k") {
        message.reply("Kağıt! Kağıt Spock'ı yanıltır. Ben kazandım")
      }
      else if(son === "m") {
        message.reply("Makas! Spock makası parçalar. Sen kazandın")
      }
      else if(son === "l") {
        message.reply("Kertenkele! Kertenkele Spock'ı zehirler. Ben kazandım")
      }
      else if(son === "t") {
        message.reply("Taş! Spock taşı buharlaştırır. Sen kazandın")
      }
      
    
    }
  else if(mesaj === "yardim") {
    message.channel.send("Oyun basit. Bir seçim yapmalısın. Sonrasında da bu seçimlere karşı ben seçim yapacağım ve seçimi daha güçlü olan kazanır. Makas kağıdı keser, kağıt taşı kaplar, taş kertenkeleyi ezer, kertenkele Spock'ı zehirler, Spock makası parçalar, makas kertenkelenin başını keser, kertenkele kağıdı yer, kağıt Spock'ı yanıltır, Spock taşı buharlaştırır ve her zamanki gibi taş makası ezer. \n```Seçimler: \nTaş: !tkm t \nKağıt: !tkm k \nMakas: !tkm m \nKertenkele: !tkm l \nSpock: !tkm s```")
  
  }
  else {
      message.reply("Lütfen geçerli bir değer gir. Seçimler: \nTaş: t \nKağıt: k \nMakas: m \nKertenkele: l \nSpock: s")
      }
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tkm'],
  permLevel: 0
};

exports.help = {
  name: 'tkmls',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};