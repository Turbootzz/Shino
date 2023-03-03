import { SlashCommandBuilder } from '@discordjs/builders';

const introduceCommand = new SlashCommandBuilder()
  .setName('introduce')
  .setDescription('Introduce yourself to me.');

export default introduceCommand.toJSON();