const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send('...hm?')
        .then((m) => m.edit(`Salut ${message.author.username} !`));
};

module.exports.help = {
    name: 'salut'
};