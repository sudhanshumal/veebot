const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    message.channel.send(("Pong! Response Time: `") + (Date.now() - message.createdTimestamp) + "` ms");
};

module.exports.help = {
    name: "ping"
};