const fs = require('fs');

function log(message, type){
    if(message == "start"){
        console.log('\x1b[32m%s\x1b[0m', '=======================================');
        console.log('\x1b[32m%s\x1b[0m', 'EasyDactyl by Ryder is now starting up!')
        console.log('\x1b[32m%s\x1b[0m', '=======================================');
        console.log('\x1b[0m%s\x1b[0m', 'Logging is now started!');
    }
    else{
        if(type == "success"){
            console.log('\x1b[32m%s\x1b[0m', message); 
        }
        if(type == "failure"){
            console.log('x1b[31m%s\x1b[0m', message);
        }
        writeFile(message);
    }
}

function writeFile(message) {
    fs.appendFile('log', `${displayTime()}: ${message}\n`, function (err) {
        if (err) throw err;
    });
}

function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
}

module.exports = { log };