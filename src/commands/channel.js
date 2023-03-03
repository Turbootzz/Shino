import { SlashCommandBuilder } from "@discordjs/builders";

const channelsCommand = new SlashCommandBuilder()
    .setName("channels")
    .setDescription("channels dummy")
    .addChannelOption((option) => 
        option
        .setName("channels")
        .setDescription("does something with channels")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
        option
        .setName("addmsg")
        .setDescription("Add Message")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
        option
        .setName("number")
        .setDescription("Add Number")
        .setRequired(true)
    );

export default channelsCommand.toJSON();