const discord = require('discord.js');
const client = new discord.Client();
const config = require("../config.json");
const con = require("../includes/db.js");
const easyLogger = require("../includes/easyLogger.js");
const fs = require('fs');

module.exports.run = async (message, args) =>{
    var embed = new discord.MessageEmbed()
    .setColor(config.successColor)
    .setAuthor(config.author)
    .setFooter(config.footer)
    .setDescription(`📊 | Ping is being calculated..`)
    sentMessage = await message.channel.send(embed);
    
    var embed = new discord.MessageEmbed()
    .setColor(config.successColor)
    .setAuthor(config.author)
    .setFooter(config.footer)
    .setDescription(`🏓 | Ping is ${Math.round((sentMessage.createdTimestamp - message.createdTimestamp))}ms`)
    sentMessage.edit(embed)
}