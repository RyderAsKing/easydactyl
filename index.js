// Requires
const discord = require('discord.js');
const fs = require('fs');

// Config and includes
const config = require('./config.json');

// Constructs
const client = new discord.Client();

fs.readdir(`./events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.login(config.token);