const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-list')
        .setDescription('Shows current timezone-list of this chanel'),
    async execute(interaction) {
        //some code goes here...
        await interaction.reply('List, list, list, list, ...')
    },
}

