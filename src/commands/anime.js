import { SlashCommandBuilder } from "@discordjs/builders";

const animecmd = new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Choose your favourite Waifu")
    .addStringOption((option) => 
      option
        .setName("bestwaifu")
        .setDescription("Tell us your waifu")
        .setRequired(true)
        .setChoices(
          {
            name: "Ruka",
            value: "Ruka Sarashina from Rent A Girlfriend",
          },
          {
            name: "Rem",
            value: "Rem from Re:Zero",
          }
        )
    )
    .addStringOption((option) => 
    option
      .setName("bestanime")
      .setDescription("Tell us your favourite anime!")
      .setRequired(true)
      .setChoices(
        {
          name: "Naruto",
          value: "Naruto Anime",
        },
        {
          name: "DragonBall",
          value: "DragonBall Anime",
        }
      )
    );

//    console.log(animecmd);
export { animecmd };