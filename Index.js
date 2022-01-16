cost Discord = require('discord.js');
require(" dotenv" ) .config();
const bot = new Discord.Client();
const token = process. env. TOKEN;

const prefix = "jet"
const ms = require('ms");

var http = require('http'); 
http.createServer(function (req, res) 
{ 
   res.write("I'm alive"); 
   res.end(); 
}).listen(8080);

bot.on('ready', () => { 
console.log('Your Bot is now Online.') 
let activities = [`chill gang`, `with the gang`, `with the gang` ],i = 0; 
setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, 
{type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c" }), 5000) )
}


