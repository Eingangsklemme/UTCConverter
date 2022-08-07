// Just the main shit ya know
const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, CommandInteractionOptionResolver, Collection } = require('discord.js')
const { token } = require('./config.json')

// New client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Initializes command-collection
client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    client.commands.set(command.data.name, command)
}

// When client is ready...
client.once('ready', () => {
    console.log('Client ready alla!')
})

//UTC-time-shit
/*
function timeUTC() {
    const time = new Date()
    const hoursInt = time.getHours()-2
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
*/

// Reactions to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const commands = client.commands.get(interaction.commandName)

    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply({ content: 'There was a fucking terrible error while executing this shitty command! Just rethink you fucking life!', ephemeral: true})
    }

})

// Login to DC with token
client.login(token)