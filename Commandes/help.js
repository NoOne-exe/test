const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
let embed = new Discord.RichEmbed()
  .setTitle("Commandes")
  .setColor("#c737a7")
  .addField("Modération :", ";kick(kicker un membre(avoir les perm requises)) \n;ban(bannir un membre(avoir les perm requises))")
  .addField("Autres :", ";say(Sert à me faire parler(seulement Eden)) \n ;salut(pas besoin d'explication) \n ;ping(non plus);stats(affiche les stats d'un membre) \n ;help(fait apparaître cette liste)");
return message.channel.send(embed);
};

module.exports.help = {
    name: 'help'
}; 