const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
        if(!message.member.hasPermission("NAMAGE_MESSAGES")) return message.channel.send("Nice Try!")
        
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Correct Usage: `~mute <username/id>`");
        
        if(toMute.id === message.author.id) return message.channel.send("Can't mute yourself.");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute someone that has a higher role than you.");
        
        let role = message.guild.roles.find(r => r.name === "VeeBot Mute 🔇")
        if(!role) {
            try {
                role = await message.guild.createRole({
                    name: "VeeBot Mute 🔇",
                    color: "#606772",
                    permissions: []
                });
                message.guild.channels.forEach(async (channel, id) =>{
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ATTACH_FILES: false,
                        ADD_REACTIONS: false                                            
                    })
                })
            } catch(e) {
                console.log(e.stack);
            }
        }
        if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
    
        client.mutes[toMute.id] = {
            guild: message.guild.id,
            time: Date.now() + parseInt(args[1]) * 1000
        }
    
        await toMute.addRole(role);
    
        fs.writeFile("./mutes.json", JSON.stringify(client.mutes, null, 4), err => {
            if(err) throw err;
            console.log(`The user ${toMute.user.tag} has been muted`)
        });
    
        message.channel.send(`${toMute} has been muted 🔇`);
};

module.exports.help = {
    name: "mute"
};