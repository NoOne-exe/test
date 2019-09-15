var Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(!args[0]) { message.delete().catch(); return message.channel.send("Tu dois mettre un message !").then(msg => {msg.delete(2000)}); }
    if(message.member.hasPermission("ADMINISTRATOR")) {const sayMessage = args.join(" "); message.delete().catch(); return message.channel.send(sayMessage); }
    else { message.delete().catch(); return message.channel.send("Tu dois posséder les permission d'administrateur pour exécuter cette commande !").then(msg => {msg.delete(2000)}); }
}

module.exports.help = {
    name: "say"
}