const mysql = require('mysql');
const config = require('../config.json');
const con = new mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
})

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;