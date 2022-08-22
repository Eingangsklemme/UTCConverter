const { SlashCommandBuilder, time } = require('discord.js')

let utc = () => {
    const systemTime = new Date()
    return {
        year: systemTime.getUTCFullYear(),
        month: systemTime.getUTCMonth(),
        day: systemTime.getUTCDate(),
        hours: systemTime.getUTCHours(),
        minutes: systemTime.getUTCMinutes()
    }
}

let addedTime = {
    day: null,
    hour: null,
    minute: null
}

function timeAdd(addDays, addHours, addMinutes) {
    if (addMinutes != null) {
        addedTime.minute = utc().minutes + addMinutes
        if (addedTime.minute > 60) {
            addedTime.hour = addedTime.hour + parseInt(addedTime.minute / 60)
            addedTime.minute = addedTime.minute % 60
        }
    } else {
        addedTime.minute = utc.minutes
    }

    if (addHours != null) {
        addedTime.hour = utc().hours + addHours
        if (addedTime.hour > 24) {
            addedTime.day = addedTime.day + parseInt(addedTime.hour / 24)
            addedTime.hour = addedTime.hour % 24
        }
    } else {
        addedTime.hour = utc.hours
    }

    if (addDays != null) {
        addedTime.day = utc().day + addDays
        if (addedTime.day > 31) {
            console.log('fuck you')
        }
    } else {
        addedTime.day = utc.day
    }

    return formatTime(addedTime.day, addedTime.hour, addedTime.minute)
}

function formatTime(d, h, m) {
    let timestamp = utc().year + '-' + utc().month + '-' + d + ' '

    if (h < 10) {
        timestamp = timestamp + '0' + h + ':'
    } else {
        timestamp = timestamp + h + ':'
    }

    if (m < 10) {
        timestamp = timestamp + '0' + m
    } else {
        timestamp = timestamp + m
    }

    return timestamp
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('time')
        .setDescription('Gives back the configured time (leave other shit blank for UTC-time)')
        .addNumberOption(option =>
            option.setName('adddays')
                .setDescription('Days added to current UTC')
                .setRequired(false)
        )
        .addNumberOption(option =>
            option.setName('addhours')
                .setDescription('Hours added to current UTC')
                .setRequired(false)
        )
        .addNumberOption(option =>
            option.setName('addminutes')
                .setDescription('Minutes added to current UTC')
                .setRequired(false)
        ),
    async execute(interaction) {
        const addDaysLol = interaction.options.getNumber('adddays')
        const addHoursLol = interaction.options.getNumber('addhours')
        const addMinutesLol = interaction.options.getNumber('addminutes')
        if (addDaysLol == null && addHoursLol == null && addMinutesLol == null) {
            await interaction.reply('UTC ' + formatTime(utc().day, utc().hours, utc().minutes))
        } else {
            await interaction.reply('UTC ' + timeAdd(addDaysLol, addHoursLol, addMinutesLol))
        }
    },
}
