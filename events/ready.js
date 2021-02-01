const discord = require('discord.js');
const client = new discord.Client();
const config = require("../config.json");
const con = require("../includes/db.js");
const easyLogger = require("../includes/easyLogger.js");
const fs = require('fs');

exports.run = (client) => {
    easyLogger.log("start", "none");
    client.user.setActivity('https://github.com/RyderAsKing/EasyDactyl', { type: 'WATCHING'});
}
