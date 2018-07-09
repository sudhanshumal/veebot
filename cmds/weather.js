const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
const snekfetch = require("snekfetch");
//const weather = require("weather.js");

module.exports.run =  async (client, message, args) => {
    let city = args[0];
    let city2 = args[1];
    let city3 = args[2];
    if(!city) {
        message.channel.send(`Correct Usage: ${prefix}weather `+"`<city>`")
    } else {
        const api = `https://api.apixu.com/v1/current.json?key=d3b6bf6d5cc84bd8976140312180807&q=${city}+${city2}+${city3}`;
        snekfetch.get(api).then(r => {
            let body = r.body;
            let cityn = body.location.name;
            let country = body.location.country;
            let tempc = body.current.temp_c;
            let tempf = body.current.temp_f;
            let feelsc = body.current.feelslike_c;
            let feelsf = body.current.feelslike_f;
            let icon = body.current.condition.icon;
            let condn = body.current.condition.text;
            var embed = new Discord.RichEmbed()
                .setAuthor("Weather", "https://images-fe.ssl-images-amazon.com/images/I/41wkG24yDkL.png", `https://www.apixu.com/weather/q/${city}`)
                .setTitle(`Weather for ${cityn}, ${country}`)
                .addField("Current Conditions:", `${condn}`)
                .setColor("#74c8fc")
                .setThumbnail(`http:${icon}`)
                .addField("Current Temperature:", `${tempc}°C | ${tempf}°F`, inline=true)
                .addField("Feels Like:", `${feelsc}°C | ${feelsf}°F`, inline=true)
                .setFooter("Powered by Apixu | VeeBot ")
            message.channel.send(embed);
        });
    }
};

module.exports.help = {
    name: "weather"
};