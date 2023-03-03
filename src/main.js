import { } from "dotenv/config";
import {
  Client,
  GatewayIntentBits,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  Routes,
  InteractionType
} from "discord.js";
import { REST } from "@discordjs/rest";
import animeCommand from "./commands/anime.js";
import introduceCommand from "./commands/introduce.js";
import rolesCommand from "./commands/roles.js";
import usersCommand from "./commands/user.js";
import channelsCommand from "./commands/channel.js";
import banCommand from "./commands/ban.js";

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
    if (interaction.commandName === "anime") {
      const bestwaifu = interaction.options.get("bestwaifu").value;
      const bestanime = interaction.options.get("bestanime").value;
      console.log(`Used command`);
      interaction.reply({
        content: `You chose ${bestwaifu} and ${bestanime} as your favourite waifu and anime !`
      });
    } else if (interaction.commandName === "introduce") {
      const modal = new ModalBuilder()
        .setTitle('Introduce Yourself')
        .setCustomId('introduceModal')
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setLabel('Your Name')
              .setCustomId('username')
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setLabel('Gender')
              .setCustomId('gender')
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setLabel('Hobbies')
              .setCustomId('hobbies')
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setLabel('Write something short about yourself')
              .setCustomId('comment')
              .setStyle(TextInputStyle.Paragraph)
              .setRequired(false)
          )
        );
      interaction.showModal(modal);
    }
    // Handles all the modal submissions
  } else if (interaction.type === InteractionType.ModalSubmit) {
    console.log("Modal submited..");
    if (interaction.customId === "introduceModal") {
      const username = interaction.fields.getTextInputValue("username");
      const gender = interaction.fields.getTextInputValue("gender");

      function genderResult(gender){
        var answer;
        switch (gender.toLowerCase()) {
          case "male": case "guy": case "boy": case "man": case "he/him": case "he":
            answer = "him";
            break;
          case "female": case "lady": case "girl": case "woman": case "she/her": case "her":
            answer = "her";
            break;
          default:
            answer = "it";
      }
      return answer;
    }

      console.log(username + " introduced " + genderResult(gender) + "self");
      interaction.reply({
        content: `Thank you ${username} for introducing yourself! :)`,
      })
    }
  }
});
// Types are listed on the discord docs
async function main() {

  const commands = [
    animeCommand,
    introduceCommand,
    //rolesCommand,
    //usersCommand,
    //channelsCommand,
    //banCommand
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