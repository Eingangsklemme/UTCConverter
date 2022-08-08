const { SlashCommandBuilder } = require('discord.js')

function addTimeZone(timezone) {
    console.log(timezone)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-add')
        .setDescription('Adds one timezone to this channels timezone-list')
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
        addTimeZone(timezone)
        await interaction.reply('Added timezone "' + timezone + '" to this channels timezone-list.')
    },
}

