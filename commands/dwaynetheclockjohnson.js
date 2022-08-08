const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dwaynetheclockjohnson')
        .setDescription('makes something useful or idfk lol'),
    async execute(interaction) {
        await interaction.reply('Every member of the BAH Cons. has the biggest cock on earth lol')
        await interaction.followUp({ content: 'Also, i fucked your mom lol', ephemeral: true })
        await wait(1000)
        await interaction.followUp({ content: 'https://c.tenor.com/uhnVFBgGehUAAAAC/tenor.gif', ephemeral: true })
    },
}

