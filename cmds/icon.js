const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    let msg = await message.channel.send("Generating Icon...");
    if(!message.guild.iconURL) msg.edit("There is no icon for this guild.");
    message.reply(message.guild.iconURL);
    
    msg.delete();
};

module.exports.help = {
    name: "icon"
};