const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
/*      const msgs = await message.channe.awaitMessages(msg => {
        console.log(msg.content);
        return msg.content.includes("hi");
    }, {time: 5000});
    
    console.log(msgs);*/
    
    let role1 = "🐇"; let role2 = "🐱";
    
    let msg = message.channel.send("VOTE!");
    /*await msg.react(role1);
    await msg.react(role2);*/
    
    /*const reactions = msg.awaitReactions(reaction => 
    reaction.emoji.name === role1);
    console.log(reactions.fetchUsers());*/
};
    

module.exports.help = {
    name: "autorole"
};