const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    if (message.author.id === config.ownerID) {
        if (args[0]) client.user.setActivity(args[0]);
        else if (!args[0]) message.channel.send("What should I be doing?\nSet an activity using: `" + `${config.prefix}` + "activity <activity>`");
    } else message.channel.send('Nice Try!');
};

module.exports.help = {
    name: "activity"
};