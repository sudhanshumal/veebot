const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;
    
    let msg = await message.channel.send("Generating Avatar...")
    message.reply(target.avatarURL)
    
    msg.delete();
};

module.exports.help = {
    name: "avatar"
};