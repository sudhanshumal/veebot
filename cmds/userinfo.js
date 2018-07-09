const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
        let target = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
            .setAuthor(target.username)
            .setDescription("User Information")
            .setThumbnail(target.avatarURL)
            .setColor("#57BB82")
            .addField("Username", `${target.tag}`)
            .addField("ID", `${target.id}`)
            .addField("Created At:", `${target.createdAt}`);
        message.channel.send(embed);
};

module.exports.help = {
    name: "userinfo"
};