const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
const client = new Discord.Client();
client.tags = require("./../tags.json");

module.exports.run =  async (client, message, args) => {
    let tag = args[0];
    for(let i in client.tags){
        let key = client.tags[i]
        };
    if (tag === key) {
        message.channel.send(client.tags.tag)
    } else {message.channel.send("Supply a valid tag!")};
    
};

module.exports.help = {
    name: "tag"
};