const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
const api = "https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");

module.exports.run =  async (client, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send("Supply an ID!");
        if(isNaN(id)) return message.channel.send("Supply a valid ID!");
        
        let entry = body.find(post => post.id === id);
        console.log(entry);
        
        if(!entry) return message.channel.send("This entry does not exist!");
    });
}

module.exports.help = {
    name: "json"
};