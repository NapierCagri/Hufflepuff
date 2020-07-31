const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("message", msg => {
  if (msg.content.toLowerCase() === "leo") {
    const ayy = client.emojis.find(emoji => emoji.name === "burnukleo");
    msg.channel.send(`GIMME MY BURNUK NIGGA ${ayy}\n-<@499327588607590407>`);
  }
  if (msg.content.toLowerCase() === "seçmen şapka") {
    const ayy = client.emojis.find(emoji => emoji.name === "hufpuf");
    msg.channel.send(
      `Belki de düşersin Hufflepuff'a, \nHaksızlığı hemen kaldırıp rafa, \nAdalet uğruna savaş verirsin, \nHer yere mutluluk götürmek için. ${ayy}`
    );
  }
  if (msg.content.toLowerCase() === "billy") {
    const embed = new Discord.RichEmbed();
    msg.channel.send(
      "Billy yok! Billy öldü! Kafasına buzdolabı düştüğü gün o iş bitti!"
    );
  }
  if (msg.content.toLowerCase() === prefix + "davet") {
    msg.reply("https://discord.gg/CC3664j");
  }
  if (msg.content.toLowerCase() === "annabeth") {
    msg.channel.send(
      "<@695620409210568714> ödev istemeyeceksen eğer seni çağırıyorlar"
    );
  }
  if (msg.content.toLowerCase() === "smoke") {
    var mld = [
      "Duman gibi git, melodi gibi gel :test_tube: \n-<@344473688818712576>",
      "Sizi iksirlerim, kazanıma tekme atarsınız \n-<@344473688818712576>",
      "YENİ PROFESÖRÜMÜZ BURADA! <@344473688818712576>",
      "Şşşş bu seferlik etiketlemiyorum duym- <@344473688818712576> Ups"
    ];
    var response = mld[Math.floor(Math.random() * mld.length)];
    msg
      .reply(response)
      .then()
      .catch(console.error);
  }
  if (msg.content.toLowerCase() === "melody") {
    var mld = [
      "Duman gibi git, melodi gibi gel :test_tube: \n-<@344473688818712576>",
      "Sizi iksirlerim, kazanıma tekme atarsınız \n-<@344473688818712576>",
      "YENİ PROFESÖRÜMÜZ BURADA! <@344473688818712576>",
      "Şşşş bu seferlik etiketlemiyorum duym- <@344473688818712576> Ups"
    ];
    var response = mld[Math.floor(Math.random() * mld.length)];
    msg
      .reply(response)
      .then()
      .catch(console.error);
  }
  if (msg.content.toLowerCase() === "mert") {
    msg.channel.send("Meeeert, ban arsızı meeert", {
      file:
        "https://media1.tenor.com/images/d588d295136d07891a79ecc4d38e1a22/tenor.gif"
    });
  }
  if (msg.content.toLowerCase() === "burnuk") {
    msg.reply("Ne var beğ");
  }
  if (msg.content.toLowerCase() === "ödev") {
    var generalChannel = client.channels.get("665487339178426370");
    const embed = new Discord.RichEmbed();
    embed.setColor("#DFBF20");
    embed.setTitle("Ödev yapanlar toplansın");
    embed.setDescription("Ödeve başlıyoruz");
    generalChannel.send("<@&702139814581108816>", { embed: embed });
  }
  if (msg.content.toLowerCase() === "ana") {
    msg.reply("Ananın binası Hufflepuff");
  }
  if (msg.content.toLowerCase() === "hannah") {
    msg.channel.send("hey");
  }
  if (msg.content.toLowerCase() === "athena") {
    msg.channel.send("Çamaşır sulu pıçak (Ne âlâkaysa) <@678609679017967616>");
  }
  if (msg.content.toLowerCase() === "amras") {
    const embed = new Discord.RichEmbed();
    msg.channel.send(
      "Hufflepuff'ın gururu", {file: "https://i.pinimg.com/originals/50/40/54/504054e0ba229b36defb15996299d8d1.gif"}
    );
  }
  if (msg.content.toUpperCase() === "GÜNAYDIN") {
    var gnd = [
      "Hiçbir gece sonsuza kadar gece olarak kalmaz. Gündüz ile güneş ile yerini paylaşması gerekir. Sen bir keder ile karşılaştığında gecenin sona ereceğini bilerek gülümse ve yılma. Günün aydın ve mükemmel olsun sevdiğim.",
      "Her gün bir gün öncesinden daha güzel bir gün geçirmeni ve seni hep mutlulukların karşılamasını dilerim.",
      "Meleğim uyan kahvaltıyı hazırladım, ekmeğine bal sürdüm, çayını koydum. Seni ve vereceğin huzuru masa başında bekliyorum.",
      "Günaydın içinde günü ve aydınlığı barındıran güzel bir kelimedir. Her gününün aydın olmasını dilerim.",
      "Güneş doğdukça insanlar aydınlık ile tanışacak ve mutlu olmak için sebepler arayacaktır. Bugün uyan ve kendi hayatında ki mutluluğu bulmak için adım at.",
      "Seninle başladığım her gün bana huzur veriyor. Seninle her gün mutluluğu yaşamak için dua ediyorum. Günün güzel olsun.",
      "Bugün bir çay içesim var seninle. Uyan da çay koy yârim.",
      "Bir sabaha senle uyandığımda mutlu oluyorum, sensiz bir günü ise düşünemiyorum. Sensiz bir gün asla hayatımda yer almasın sevdiğim.",
      "Sana gün aymasın"
    ];

    var response = gnd[Math.floor(Math.random() * gnd.length)];

    msg
      .reply(response)
      .then()
      .catch(console.error);
  }
  if (msg.content.toLowerCase() === "apsethu's") {
    var bann = [
      "https://img-s1.onedio.com/id-575872d81dcb022235ef3ba0/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-d0f4f9ed0be9574ff656957e56b4afb0ae97d916.gif",
      "https://img-s2.onedio.com/id-5758729069f9773f22c4c091/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-aa88eda452097bd7903cd87e59246c21b338d715.gif",
      "https://img-s1.onedio.com/id-57587377190ed92e586cd198/rev-0/w-500/s-6fbd503188f9983e69d749f2b06360b38547e528.gif",
      "https://img-s2.onedio.com/id-575874eb4ec5838a6d0ca569/rev-0/w-500/s-87a1adb648d7fc2c30f1300a2eda449de0e88122.gif"
    ];
    var bank = bann[Math.floor(Math.random() * bann.length)];
    const embed2 = new Discord.RichEmbed();
    embed2.setColor("#DFBF20");
    embed2.setTitle("ALLAHU EKBER ALLAHU EKBER");
    embed2.setImage(bank);
    msg.channel.send(embed2);
  }
  if (msg.content.toLowerCase() === "apsethus") {
    var bann = [
      "https://img-s1.onedio.com/id-575872d81dcb022235ef3ba0/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-d0f4f9ed0be9574ff656957e56b4afb0ae97d916.gif",
      "https://img-s2.onedio.com/id-5758729069f9773f22c4c091/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-aa88eda452097bd7903cd87e59246c21b338d715.gif",
      "https://img-s1.onedio.com/id-57587377190ed92e586cd198/rev-0/w-500/s-6fbd503188f9983e69d749f2b06360b38547e528.gif",
      "https://img-s2.onedio.com/id-575874eb4ec5838a6d0ca569/rev-0/w-500/s-87a1adb648d7fc2c30f1300a2eda449de0e88122.gif"
    ];
    var bank = bann[Math.floor(Math.random() * bann.length)];
    const embed2 = new Discord.RichEmbed();
    embed2.setColor("#DFBF20");
    embed2.setTitle("ALLAHU EKBER ALLAHU EKBER");
    embed2.setImage(bank);
    msg.channel.send(embed2);
  }
  if (msg.content.toLowerCase() === "tara") {
    const embed2 = new Discord.RichEmbed();

    msg.channel.send("**TARAMAYA**", {
      file: "https://media0.giphy.com/media/dl2c1a1xHklcJzCmCP/giphy.gif"
    });
  }
  if (msg.content.toLowerCase() === "slytherin botu") {
    const ayy = client.emojis.find(emoji => emoji.name === "burnukleo");
    const ayy2 = client.emojis.find(emoji => emoji.name === "hufpuf");
    msg.reply(`Ben tabii ki daha iyiyim ${ayy} ${ayy2} `);
  }
  if (msg.content.toLowerCase() === "veronica") {
    msg.channel.send("<@683399056503865447> BEN DAHA İYİYİM");
  }
  if (msg.content.toLowerCase() === "shar") {
    msg.channel.send("VAK VAK VAK");
  }
  if (msg.content.toLowerCase() === "eppek") {
    const embed2 = new Discord.RichEmbed();
    embed2.setColor("#DFBF20");
    embed2.setTitle("Çok istedin, işte oldu. AL SANA EPPEK REİS");
    embed2.setImage(
      "https://pbs.twimg.com/profile_images/1252331920341569536/WN1gKJAO_400x400.jpg"
    );
    msg.channel.send("<@656265940517912617>", { embed: embed2 });
  }
  if (msg.content.toLowerCase() === "trevis") {
    const embed2 = new Discord.RichEmbed();
    embed2.setColor("#DFBF20");
    embed2.setImage(
      "https://cdn3.whatculture.com/images/2017/01/ccef213d8830cd51-600x338.jpg"
    );
    msg.channel.send("İİİİHİHİHİİHİHİ", {
      embed: embed2
    });
  }
  if (msg.content.toLowerCase() === "geliyorum") {
    msg.channel.send("İŞTE GELİYOR, DORA HAREKAT", {
      file: "https://i.kym-cdn.com/photos/images/original/000/428/552/7a4.jpg"
    });
  }
  if (msg.content.toLowerCase() === "dora") {
    msg.channel.send(":hamster:");
  }
  if (msg.content.toLowerCase() === "lumos") {
    msg.channel.send("/*");
  }
  if (msg.content.toLowerCase() === "/*") {
    msg.channel.send("Nox");
  }
  if (msg.content.toLowerCase() === "nox") {
    msg.channel.send("/");
  }
  if (msg.content.toLowerCase() === prefix + "korkut") {
    msg.channel.send("**BÖÖÖÖ**", {
      file: "https://24.media.tumblr.com/tumblr_m4uxvvD22T1r011tlo1_r1_500.gif"
    });
  }
  if (msg.content.toLowerCase() === "onua") {
    msg.channel.send("Xander ile bir ömür mutluluklar");
  }
  if (msg.content.toLowerCase() === "xander") {
    msg.channel.send({
      file:
        "https://i.pinimg.com/originals/5c/61/d5/5c61d57b87d7fcad5a1eaa3fe1351432.gif"
    });
  }
  if (msg.content.toLowerCase() === "!tmnt") {
    msg.channel.send({ file: "https://i.imgur.com/Hjx6D.gif" });
  }
  if (msg.content.includes("<@&724367519296520212>")) {
    msg.channel.send("SATTIN BİZİ VAHHABİ <@689338408593653810>");
  }
  if (msg.content.toUpperCase() === "ÇAĞRI") {
    msg.channel.send("Çağrı benim sahibim ayrıca o bir Gryffindor");
  }
  if (msg.content.toLowerCase() === "burçin") {
    msg.channel.send(
      "Burçin abla kitap kulübünde çok güzel kitap okuyor değil mi <@707939136153190441>",
      {
        file:
          "https://i.pinimg.com/originals/db/49/d7/db49d71410c49fac75a2073e36250bcd.gif"
      }
    );
  }
  if (msg.content.toLowerCase() === "flora") {
    msg.channel.send({
      file:
        "https://medyabey.com/wp-content/uploads/2019/09/0c1182e8-3e4b-4446-a58d-f3578214ad24.jpg"
    });
  }
  if (msg.content.toLowerCase() === "!tesla") {
    msg.channel.send(
      "TESLA ADAM! VALLAHİ ADAM! BİLLAHİ ADAM! TÜM BİLİM CAMİASI DUYSUN Kİ ADAM!",
      {
        file:
          "https://pmcdeadline2.files.wordpress.com/2019/06/the-current-war-cw_03724_rgb.jpg"
      }
    );
  }
  if(msg.content.toLowerCase() === prefix + "tag") {
    msg.channel.send("ᙨ")
  }
  if(msg.content.toLowerCase() === "emre") {
    msg.channel.send("<@463725962064822283>", {file: "https://www.tekbasinadaolur.com/wp-content/uploads/2016/06/Grizzly-Bear-1.jpg"})
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
