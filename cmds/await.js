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
    
    let heejin = "🐇"; let hyunjin = "🐱";
    
    let msg = await message.channel.send("VOTE!");
    await msg.react(heejin);
    await msg.react(hyunjin);
    
    const reactions = await message.awaitReactions(reaction => {
        reaction.emoji.name === heejin || reaction.emoji.name === hyunjin
    })
    console.log(reaction.users)
    
};

module.exports.help = {
    name: "await"
};