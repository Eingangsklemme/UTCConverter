// Just the main shit ya know
const { Client, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

// New client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When client is ready...
client.once('ready', () => {
    console.log('Client ready alla!')
})

// Login to DC with token
client.login(token)