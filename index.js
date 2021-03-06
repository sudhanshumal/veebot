const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.prefix;
const fs = require("fs");
client.commands = new Discord.Collection();
client.mutes = require("./mutes.json");

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);
    
    let jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }
    console.log(`Loading ${jsFiles.length} commands...`);
    jsFiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
}); 

client.on("ready", async () => {
    console.log(`I am Ready! ${client.user.username}`);
    
    client.setInterval(() => {
        for(let i in client.mutes) {
            let time = client.mutes[i].time;
            let guildId = client.mutes[i].guild;
            let guild = client.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "VeeBot Mute 🔇")
            if(!mutedRole) continue;
            
            if(Date.now() > time) {
                member.removeRole(mutedRole);
                delete client.mutes[i];
                
                fs.writeFile("./mutes.json", JSON.stringify(client.mutes), err => {
                    if(err) throw err;
                    console.log(`The user ${member.user.tag} has been unmuted.`);
                })
            }
        }
        
    })
    
    try {
        let link = await client.generateInvite(['ADMINISTRATOR']);
        console.log(link); 
    } catch(e) {
        console.log(e.stack);
    }
    
    //console.log(client.commands);
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    
    let msg = message.content.split(" ");
    let command = msg[0];
    let args = msg.slice(1);

    if (!command.startsWith(prefix)) return;
    
    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);
});

client.on("messageReactionAdd", async (reaction, user) => {
    const toRole = reaction.message.member;
    if (reaction.message.channel.id !== "460682787494821919") {return}
    else{
    if (reaction.emoji.name === "🐰") {toRole.addRole("464326205966123009")}; //HeeJin
    if (reaction.emoji.name === "🐱") {toRole.addRole("464326315634327582")}; //HyunJin
    if (reaction.emoji.name === "🐦") {toRole.addRole("464326333871423489")}; //HaSeul
    if (reaction.emoji.name === "🐸") {toRole.addRole("464326205966123009")}; //YeoJin
    if (reaction.emoji.name === "🦌") {toRole.addRole("464326205966123009")}; //ViVi
    if (reaction.emoji.name === "🦉") {toRole.addRole("464326205966123009")}; //Kim Lip
    if (reaction.emoji.name === "🐟") {toRole.addRole("464326205966123009")}; //JinSoul
    if (reaction.emoji.name === "🦇") {toRole.addRole("464326205966123009")}; //Choerry
    if (reaction.emoji.name === "🦆") {toRole.addRole("464326205966123009")}; //Yves
    if (reaction.emoji.name === "🐧") {toRole.addRole("464326205966123009")}; //Chuu
    if (reaction.emoji.name === "🦋") {toRole.addRole("464326205966123009")}; //Go Won
    if (reaction.emoji.name === "🐺") {toRole.addRole("464326205966123009")}; //Olivia Hye
}});

client.on("messageReactionRemove", async (reaction, user) => {
    const toRole = reaction.message.member;
    if (reaction.message.channel.id !== "460682787494821919") {return}
    else{
    if (reaction.emoji.name === "🐰") {toRole.removeRole("464326205966123009")}; //HeeJin
    if (reaction.emoji.name === "🐱") {toRole.removeRole("464326315634327582")}; //HyunJin
    if (reaction.emoji.name === "🐦") {toRole.removeRole("464326333871423489")}; //HaSeul
    if (reaction.emoji.name === "🐸") {toRole.removeRole("464326205966123009")}; //YeoJin
    if (reaction.emoji.name === "🦌") {toRole.removeRole("464326205966123009")}; //ViVi
    if (reaction.emoji.name === "🦉") {toRole.removeRole("464326205966123009")}; //Kim Lip
    if (reaction.emoji.name === "🐟") {toRole.removeRole("464326205966123009")}; //JinSoul
    if (reaction.emoji.name === "🦇") {toRole.removeRole("464326205966123009")}; //Choerry
    if (reaction.emoji.name === "🦆") {toRole.removeRole("464326205966123009")}; //Yves
    if (reaction.emoji.name === "🐧") {toRole.removeRole("464326205966123009")}; //Chuu
    if (reaction.emoji.name === "🦋") {toRole.removeRole("464326205966123009")}; //Go Won
    if (reaction.emoji.name === "🐺") {toRole.removeRole("464326205966123009")}; //Olivia Hye}
}});

client.login(config.token);