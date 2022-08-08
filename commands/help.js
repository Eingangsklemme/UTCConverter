const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Stop it, get some help!'),
    async execute(interaction) {
        await interaction.reply({ content: 'If you just want to know the current UTC-time, just type in **/time** without specifying a timezone. And... thats actually the only command that really works for now, the rest is kinda useless. Oh, wait, you can try **/dwaynetheclockjohnson**, but now thats it. The rest will also become functional soon...', ephemeral: true })
    },
}