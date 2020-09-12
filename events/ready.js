const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online!`)
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'Starville [Alpha]',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/monstercat'
        }
    })
}