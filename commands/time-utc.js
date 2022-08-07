const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('time-utc')
        .setDescription('Gives back the current UTC-time'),
    async execute(interaction) {
        const time = new Date()
        const hoursInt = time.getHours() - 2
        const minsInt = time.getMinutes()
        let hours = 0
        let mins = 0

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
        await interaction.reply('UTC ' + utcTime)
    },
}

