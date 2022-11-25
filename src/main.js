import {} from "dotenv/config";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

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
    console.log("used command");
    interaction.reply({
      content: `You chose ${interaction.options.get("waifu").value}`
    });
  }
});
// Types are listed on the discord docs
async function main() {
  const commands = [
    {
      name: "help",
      description: "See all commands",
    },
    {
      name: "waifus",
      description: "Get waifu pics",
    },
    { 
      name: "bestwaifu",
      description: "Choose your best waifu",
      options: [
        {
          name: "waifu",
          description: "Tell us your waifu",
          type: 3,
          required: true,
        },
      ],
    },
  ];

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