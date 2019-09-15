const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong. je suis la meilleure à ça hehe`));
};

module.exports.help = {
    name: 'ping'
};