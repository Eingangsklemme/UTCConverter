// Just the main shit ya know
const { Client, GatewayIntentBits, CommandInteractionOptionResolver } = require('discord.js')
const { token } = require('./config.json')

// New client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When client is ready...
client.once('ready', () => {
    console.log('Client ready alla!')
})

//UTC-time-shit
function timeUTC() {
    const time = new Date()
    const hoursInt = time.getHours()-2
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
    return utcTime
}

// Reactions to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const { commandName } = interaction

    if (commandName === 'cock') {
        await interaction.reply('Der Cock aller BAH Cons. Mitarbeiter ist unfassbar groß')
    } else if (commandName === 'time-utc') {
        await interaction.reply('UTC ' + timeUTC())
    } else if (commandName === 'timezone-add') {
        await interaction.reply('Timezone added.')
    } else if (commandName === 'timezone-remove') {
        await interaction.reply('Timezone removed.')
    }
})

// Login to DC with token
client.login(token)