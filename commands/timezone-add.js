const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-add')
        .setDescription('Adds one timezone to this chanels timezone-list'),
    async execute(interaction) {
        //some code goes here...
        await interaction.reply('Added timezone ' + timezone + ' to this chanels timezone-list.')
    },
}

