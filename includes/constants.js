const discord = require('discord.js');
const client = new discord.Client();
const config = require("../config.json");
const con = require("../includes/db.js");
const easyLogger = require("../includes/easyLogger.js");
const fs = require('fs');

// This is just an example of required constants while creating a new command
