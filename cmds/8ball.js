const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
var luck = ["Yes", "No", "Maybe"];

module.exports.run =  async (client, message, args) => {
    if (args[1]) message.channel.send(luck[Math.floor(Math.random() * luck.length)]);
    else message.channel.send("Correct Usage: `" + `${prefix}` + "8ball <question>`");
};

module.exports.help = {
    name: "8ball"
};