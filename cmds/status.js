const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    if (message.author.id === config.ownerID) {
    if (args[0] == 'dnd') client.user.setStatus('dnd');
        else if (args[0] == 'idle') client.user.setStatus('idle');
        else if (args[0] == 'online') client.user.setStatus('online');
        else if (args[0] == 'inv') client.user.setStatus('invisible');
        else if (!args[0]) message.channel.send("Status undefined.\nSet a status using: `" + `${config.prefix}` + "status: <online, idle, dnd>`");
    } else message.channel.send('Nice Try!');
};

module.exports.help = {
    name: "status"
};