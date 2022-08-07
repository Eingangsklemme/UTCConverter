const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-remove')
        .setDescription('Removes one timezone of this chanels timezone-list'),
    async execute(interaction) {
        //some code goes here...
        await interaction.reply('Removed timezone ' + timezone + ' of this chanels timezone-list.')
    },
}

