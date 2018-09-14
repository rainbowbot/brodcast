const Discord = require('discord.js');
const client = new Discord.Client();
var prefix=`!`
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix - 'bc') {
    message.channel.send(`\`${message.guild.memberCount}\` : عدد الاعضاء المستلمين`);
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        var bc = new Discord.RichEmbed()
            .addField(':earth_americas:  » سيرفر : ', message.guild.name)
            .addField(':thinking:  » راسل : ', message.author.username)
            .addField(':pencil:  » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
 
client.login(process.env.BOT_TOKEN)
