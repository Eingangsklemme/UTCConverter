const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezone-add')
        .setDescription('Adds one timezone to this chanels timezone-list')
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
        //some code goes here...
        const timezone = 'berlin'
        await interaction.reply('Added timezone ' + timezone + ' to this chanels timezone-list.')
    },
}

