const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");

module.exports.run =  async (client, message, args) => {
    let myDate = new Date(client.readyTimestamp);
    let myTime = new Date(client.uptime); 
    message.channel.send('The bot has been up since: `' + myDate.toString() + '`.\nThe uptime is: `' + myTime.getUTCHours() + " hour(s) " + myTime.getMinutes() + " minute(s) " + myTime.getSeconds() + " seconds.`");
};

module.exports.help = {
    name: "uptime"
};