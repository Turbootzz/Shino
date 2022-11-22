// require("dotenv").config();
import {} from "dotenv/config";

// const { Client, GatewayIntentBits } = require('discord.js');
import { Client, GatewayIntentBits } from 'discord.js';
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const client = new Client({ intents: ["Guilds", "GuildMessages"] });
const PREFIX = "sh!";


// listening to ready event, callback event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on("message", msg => {
  if (msg.content == "I love shino") {
    msg.react("❤️")
  }


})

client.login(process.env.BOT_TOKEN);