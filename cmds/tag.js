const Discord = module.require("discord.js");
const config = require("./../config.json");
const prefix = config.prefix;
const fs = require("fs");
const client = new Discord.Client();
const cmd = require("./tags.json")

module.exports.run =  async (client, message, args) => {
    
    switch (args[0].toLowerCase()) {
        //MEMES
        case 'boi':
            message.channel.send(`${cmd.memes.boi}`);
            break;
        case 'eargasm':
            message.channel.send(`${cmd.memes.eargasm}`);
            break;
        case 'oof':
            message.channel.send(`${cmd.memes.oof}`);
            break;
        case 'what':
            message.channel.send(`${cmd.memes.nibwhat}`);
            break;
        case 'stop':
            message.channel.send(`${cmd.memes.timetostop}`);
            break;
        case 'slide':
            message.channel.send(`${cmd.memes.slide}`);
            break;
        case 'dasgay':
            message.channel.send(`${cmd.memes.gayshit}`);
            break;
            
        //K-POP
        case 'chuuwave':
            message.channel.send(`${cmd.kpop.chuuwave}`);
            break;
        case 'dablivia':
            message.channel.send(`${cmd.kpop.oliviadab}`);
            break;
        case 'hyunjinshock':
            message.channel.send(`${cmd.kpop.hyunjinshock}`);
            break;
        case 'hyunjinheart':
            message.channel.send(`${cmd.kpop.hyunjinheart}`);
            break;
        case 'thanosoppa':
            message.channel.send(`${cmd.kpop.thanos_sarang}`);
            break;
            
        //GBOIS
        case 'heilgei':
            message.channel.send(`${cmd.gei.gayhitler}`);
            break;
        case 'putinmyass':
            message.channel.send(`${cmd.gei.gayputin}`);
    }
/*    // Loading Tags to an Array
    var tags = new Array();
    function loadTags() {
        $.getJSON("./../tags.json", function (data) {
            tags = data.tagList;
            console.log("Tags were loaded!")
        }).error(function(){
                 console.log("Error: Tags were not loaded");
            });
    }*/
};

module.exports.help = {
    name: "tag"
};