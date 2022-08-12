const { SlashCommandBuilder, time } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test-me')
        .setDescription('Just some experimental shit')
        .addStringOption( option =>
            option.setName('timezone')
                .setDescription('just a timezone, i guess th ename is self-explanatory')
                .setRequired(false)
                .addChoices(
                    { name: 'UTC', value: 'utc' },
                    { name: 'Berlin', value: 'berlin' },
                    { name: 'Vancouver', value: 'vancouver'},
                    { name: 'Αθήνα', value: 'athen'}
                )
        ),
    async execute(interaction) {
        let timezone = interaction.options.getString('timezone')
        if (timezone != null) {
            await interaction.reply('nice ' + timezone)
        } else {
            timezone = 'utc'
            await interaction.reply('okayyyy')
        }
    },
}
