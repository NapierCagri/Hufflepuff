const Discord = require('discord.js');
const embed = new Discord.RichEmbed();


module.exports.run = async (bot, message, args) => {
    let mentionedUser = message.mentions.users.first() || message.author;
        if(mentionedUser === message.author) {
          message.reply("sizin id'niz: " + mentionedUser.id)
        }
        else {
          message.channel.send("<@" + message.author.id + ">, buyrun <@" + mentionedUser.id + "> kişisinin id'si:" + mentionedUser.id);
          
        }
        

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['id'],
  permLevel: 0
};

exports.help = {
  name: 'aasdaaa',
  description: 'aaasdaaa',
  usage: 'aaadsaaa'
};