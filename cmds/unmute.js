const Discord = module.require("discord.js");
const client = new Discord.Client();
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
client.mutes = require("./../mutes.json");

module.exports.run =  async (client, message, args) => {
        if(!message.member.hasPermission("NAMAGE_MESSAGES")) return message.channel.send("Nice Try!")
        
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Correct Usage: `~unmute <username/id>`");
        
        if(toMute.id === message.author.id) return message.channel.send("Can't mute yourself.");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute someone that has a higher role than you.");
        
        let role = message.guild.roles.find(r => r.name === "VeeBot Mute 🔇")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is already unmuted!");
        await toMute.removeRole(role);
    
        delete client.mutes[toMute.id];
                
        fs.writeFile("./mutes.json", JSON.stringify(client.mutes), err => {
        if(err) throw err;
        console.log(`The user ${toMute.user.tag} has been unmuted.`);
    
        message.channel.send(`${toMute} has been unmuted 🔊`);
})};

module.exports.help = {
    name: "unmute"
};