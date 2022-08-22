const { SlashCommandBuilder, time } = require('discord.js')

function getApiTime(timezone) {
    const requestURL = `https://www.timeapi.io/api/Time/current/zone?timeZone=${timezone}`
    console.log(requestURL) //test purposes blah blah blah

    fetch(requestURL)
        .then((timeData) => timeData.json)
        .then((shit) => console.log(shit))
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test-me')
        .setDescription('Just some experimental shit')
        .addStringOption(option =>
            option.setName('timezone')
                .setDescription('just a timezone, i guess the name is self-explanatory')
                .setRequired(false)
                .addChoices(
                    { name: 'UTC', value: 'Etc/UTC' },
                    { name: 'Berlin', value: 'Europe/Berlin' },
                    { name: 'Vancouver', value: 'America/Vancouver' },
                    { name: 'Αθήνα', value: 'Europe/Athens' },
                    { name: 'Moscow', value: 'Europe/Moscow' }
                )
        ),
    async execute(interaction) {
        const timezone = interaction.options.getString('timezone')
        if (timezone != null) {
            getApiTime(timezone)
            const slash = timezone.indexOf('/') + 1
            const zoneName = timezone.substring(slash)
            await interaction.reply(zoneName + ': ' + 'nice ' + timezone)
        } else {
            getApiTime('Etc/UTC')
            await interaction.reply('UTC: ' + 'okayyyy')
        }
    },
}
