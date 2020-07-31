const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  if (
    message.member.roles.has("731680941734494242") ||
    message.member.hasPermission("MANAGE_ROLES")
  ) {
    let rMember =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kime vereceğimi söylemedin ki`);

    let aRole = "731631882801905744";
    if (rMember.roles.has(aRole))
      return message.channel.sendEmbed(
        new Discord.RichEmbed()
          .setDescription("Bunda zaten bu rol var ya")
          .setColor("#DFBF20")
      );
    rMember.addRole(aRole);
    message.channel.send("Rolleri verdim!!!"
    );
  } else {
    return message.channel.send(
      "Sende bu yetki yok ama üzülme, sana kurabiye verebilirim"
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["şaka"],
  permLevel: 0
};
exports.help = {
  name: "şaka",
  description: "Şaka ekibi rolünü alır",
  usage: "g!alıntı mesaj id"
};
