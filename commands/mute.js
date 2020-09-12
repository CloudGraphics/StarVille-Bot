const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('731198336258015342');
        if(mutedRole) {
            member.roles.add(mutedRole);
            message.channel.send("User was Successfully muted.");
        }
}

module.exports.config = {
    name: "mute",
    description: "Mute Someone",
    usage: "!mute",
    accessableby: "〖 Moderator 〗",
    aliases: []
}