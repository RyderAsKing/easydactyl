const discord = require('discord.js');
const client = new discord.Client();
const config = require("../config.json");
const con = require("../includes/db.js");
const easyLogger = require("../includes/easyLogger.js");
const fs = require('fs');
const talkedRecently = new Set();

exports.run = (client, message) => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;
	if (message.content.indexOf(config.prefix) !== 0) return;
	if (talkedRecently.has(message.author.id)) return;
	talkedRecently.add(message.author.id);
	setTimeout(() => {
		talkedRecently.delete(message.author.id);
	}, 2500);
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	try {
        let genFile = require(`../commands/${command}.js`);
        easyLogger.log(`${message.author.username} with ID ${message.author.id} has requested a command named "${command}"`, `success`);
        genFile.run(message, args);
	} catch (err){
		console.log(err)
	};
}