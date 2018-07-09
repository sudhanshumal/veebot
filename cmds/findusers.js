const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    let users = client.users;
    let query = args[0];
    if(!query) return message.channel.send(`Correct Usage: ${prefix}findusers`+" `<search query>`");
    let matches = users.filter(u => u.tag.toLowerCase().includes(query.toLowerCase()));
    
    const embed = new Discord.RichEmbed()
        .setAuthor("Found Users:")
        .setDescription(matches.map(u =>u.tag))
        .setColor("#7b48ce")
        .setFooter("VeeBot")
    message.channel.send(embed);
};

module.exports.help = {
    name: "findusers"
};