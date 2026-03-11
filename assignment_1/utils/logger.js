const fs = require('fs');

function logMessage(message) {
    const log = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync('activity.log', log);
}

module.exports = { logMessage };
