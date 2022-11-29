import {} from "dotenv/config";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { animecmd } from "./commands/anime.js";

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID; // Guild ID is for developer server and command register instantly

// GUILD is for dev, without is for production.

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

// listening to ready event, callback event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    const bestwaifu = interaction.options.get("bestwaifu").value;
    const bestanime = interaction.options.get("bestanime").value;
    console.log(`Used command`);
    interaction.reply({
      content: `You chose ${bestwaifu} and ${bestanime} as your favourite waifu and anime !`
    });
  }
});
// Types are listed on the discord docs
async function main() {
  
  const commands = [animecmd.toJSON()];

  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), {
       body: commands, 
      });
      client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();