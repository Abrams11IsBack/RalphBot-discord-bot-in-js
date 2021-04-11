const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Demola OS PRO v1.0.2');
});
client.on('message', message => {
	console.log(message.content);
    if (message.content.startsWith(`?warn`)) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('PUPA');
    } else if (message.content === '?DEBUGgetlastmessage') {
        const lastmessage = client.user.lastMessage
        console.log(lastmessage);
    } else if (message.content === `?user`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (message.content.startsWith('?kick')) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("you don't have permission to do that")
                .then(m => m.delete(5000));

        }
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`Successfully kicked ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to kick the member bruh, give me permission');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("This person is not on this server");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("You didn't mention the user to kick");
        }
      } else if (message.content.startsWith('?say')) {
        message.channel.send('Ralph: ' + message.content);
      } else if (message.content.startsWith('?ban')) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("you don't have permission to do that")
                .then(m => m.delete(5000));

        }
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              .ban({
                reason: 'loser',
              })
              .then(() => {
                // We let the message author know we were able to ban the person
                message.reply(`Successfully banned ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to ban the member bruh, give me permission');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("This person is not on this server");
          }
        } else {
          // Otherwise, if no user was mentioned
          message.reply("You didn't mention the user to ban");
        }
      }
    });
    

client.login('your token');
