const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Demola OS PRO v1.0.0');
});
client.on('message', message => {
	console.log(message.content);
    if (message.content.startsWith(`?warn`)) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('PUPA');
    }
});


client.login('your token');
