const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cock')
        .setDescription('makes something useful or idfk lol'),
    async execute(interaction) {
        await interaction.reply('Every member of the BAH Cons. has the biggest cock on earth lol')
    },
}

