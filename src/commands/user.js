import { SlashCommandBuilder } from "@discordjs/builders";

const usersCommand = new SlashCommandBuilder()
    .setName("users")
    .setDescription("users dummy")
    .addUserOption((option) => 
        option.setName("user")
        .setDescription("does something with users")
        .setRequired(true)
    );

export default usersCommand.toJSON();