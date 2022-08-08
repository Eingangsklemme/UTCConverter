const { SlashCommandBuilder } = require('discord.js')

function removeTimezone(timezone) {
    console.log(timezone)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-remove')
        .setDescription('Removes one timezone of this channels timezone-list')
        .addStringOption(option =>
            option.setName('timezone')
                .setDescription('Timezone you want to add')
                .setRequired(true)
                .setChoices(
                    { name: 'Berlin', value: 'berlin' },
                    { name: 'London', value: 'london' },
                    { name: 'Vancouver', value: 'vancouver' },
                )
        ),
    async execute(interaction) {
        const timezone = interaction.options.getString('timezone')
        removeTimezone(timezone)
        await interaction.reply('Removed timezone "' + timezone + '" of this channels timezone-list.')
    },
}

