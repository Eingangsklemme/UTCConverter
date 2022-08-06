// Just the main shit ya know
const { Client, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

// New client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When client is ready...
client.once('ready', () => {
    console.log('Client ready alla!')
})

// Reactions to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const { commandName } = interaction

    if (commandName === 'cock') {
        await interaction.reply('Justins cock ist lang')
    } else if (commandName === 'time-utc') {
        const utcTime = 0000
        await interaction.reply('UTC ' + utcTime)
    }
})

// Login to DC with token
client.login(token)