const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("651883836631678979")
setInterval(function() {
channel.send(`pleas`);
}, 30)
})

client.login(process.env.BOT_TOKEN);