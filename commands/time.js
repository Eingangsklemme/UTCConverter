const { SlashCommandBuilder } = require('discord.js')

function getTime(timezone) {
    const time = 'deine mudda is ne zeit alla' //JUST FOR TEST PURPOSES!!!
    return time
}

function timeUTC() {
    const time = new Date()
    let hoursInt = time.getHours() - 2
    const minsInt = time.getMinutes()
    let hours = 0
    let mins = 0

    if (hoursInt < 0) {
        const uselessshit = hoursInt * -1
        hoursInt = 24 - uselessshit
    }

    if (hoursInt < 10) {
        hours = '0' + hoursInt
    } else {
        hours = '' + hoursInt
    }

    if (minsInt < 10) {
        mins = '0' + minsInt
    } else {
        mins = '' + minsInt
    }

    const utcTime = hours + mins
    return utcTime
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('time')
        .setDescription('Gives back the time of the chosen timezone (leave empty for UTC)')
        .addStringOption(option =>
            option.setName('timezone')
                .setDescription('Timezone you want the time of')
                .setRequired(false)
                .setChoices(
                    { name: 'Berlin', value: 'berlin' },
                    { name: 'London', value: 'london' },
                    { name: 'Vancouver', value: 'vancouver' },
                )
        ),
    async execute(interaction) {
        const timezone = interaction.options.getString('timezone')
        const time = getTime(timezone)
        if (timezone === null) {
            await interaction.reply('UTC ' + timeUTC())
        } else {
            await interaction.reply(timezone + ': ' + time)
        }
    },
}

