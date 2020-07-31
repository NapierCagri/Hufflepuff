const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        
        var s = message.author
        
       
        if(!member) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Ölçmek İçin Birini Etiketlemelisin Mesala @deneme gibi`)
                        .setColor("DFBF20")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
       
        var anasonuc = Math.floor(Math.random() * 101)
        if(s.id === "463725962064822283") {
          
           if(member.id === "695132305878155374") {
            
          var anasonuc = 0
          
        }
          
        }
        else {
          if(member.id === "695132305878155374") {
            
          var anasonuc = 100
          
        } }
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += ``
                }
        } else {
                var kalp = ''
                var akalp = ''
        }
        
        var yorum = `YEMİN EDİYORUM NİKAHINIZI BEN KIYACAĞIM`
       
        
        if(anasonuc < 80) {
                var yorum = 'Şşşş o da seni seviyor ama utanıyor söylemeye'
        }
        if(anasonuc < 60) {
                var yorum = 'Biraz daha dene be gülüm'
        }
        if(anasonuc < 40) {
                var yorum = 'Yani bir elektriklenme var ama bilemedim'
        }
        if(anasonuc < 20) {
                var yorum = 'Havada bulut sen bu işi Umut, ay pardon unut'
        } 
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("DFBF20")
                .setTimestamp()
        message.channel.send({embed})
}

exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0,
}

exports.help = {
        name: 'aşk',
        description: 'İki kullanıcı sarasındaki aşkı ölçer.',
        usage: 'aşkölçer [@Kullanıcı] [@Kullanıcı]'
}
