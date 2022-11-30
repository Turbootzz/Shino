import { SlashCommandBuilder } from "@discordjs/builders";

const banCommand = new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban dummy")
    .addSubcommandGroup((group) =>
    group
        .setName("banoptions1")
        .setDescription("This is the first group")
        .addSubcommand(subcommand =>
            subcommand
            .setName("temp")
            .setDescription("Temporary ban a user")
            .addUserOption(option =>
                option
                .setName("user")
                .setDescription("Ban this user")
                )
        )
        .addSubcommand(subcommand =>
            subcommand
            .setName("perma")
            .setDescription("perma ban a user")
            .addUserOption(option =>
                option
                .setName("user")
                .setDescription("Ban this user")
                )
        )
    )
    .addSubcommandGroup((group) =>
    group
        .setName("banoptions2")
        .setDescription("This is the second group")
        .addSubcommand(subcommand =>
            subcommand
            .setName("soft")
            .setDescription("Soft ban a user")
            .addUserOption(option =>
                option
                .setName("user")
                .setDescription("Ban this user")
                )
        )
    );

export default banCommand.toJSON();