const Discord = require('discord.io');
const auth = require('./auth.json');
const config = require('./config.json');

const bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', () => {
    console.log('Bot has started.');
});
bot.on('message',function(user, userID, channelID, message, event){
        if(channelID == config.musicChannelId)
            return;
        if(userID == config.botID){
            bot.deleteMessage({
                channelID: channelID,
                messageID: event.d.id
            });
            bot.sendMessage({
                to: config.musicChannelId,
                message: message
            });
            return;
        }
        if(message.startsWith(config.prefix)){
            bot.deleteMessage({
                channelID: channelID,
                messageID: event.d.id
            });
            bot.sendMessage({
                to: userID,
                message: "Manda los comandos del bot al canal de musica!"
            });
        }
    }
);
