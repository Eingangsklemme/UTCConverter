const { SlashCommandBuilder } = require('discord.js')

function timeUTC() {
    const time = new Date()
    const hoursInt = time.getHours() - 2
    const minsInt = time.getMinutes()
    let hours = 0
    let mins = 0

    if (hoursInt < 0) {
        hoursInt = 24 - hoursInt
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
        .setName('time-utc')
        .setDescription('Gives back the current UTC-time'),
    async execute(interaction) {
        await interaction.reply('UTC ' + timeUTC())
    },
}

