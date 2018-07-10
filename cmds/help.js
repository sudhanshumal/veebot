const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
const cmd = require("./tags.json")

module.exports.run =  async (client, message, args) => {
    message.channel.send(`${cmd.help}`)
};

module.exports.help = {
    name: "help"
};