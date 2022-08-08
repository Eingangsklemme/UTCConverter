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

// Dynamically react to events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// When client is ready...
client.once('ready', () => {
    console.log('Client ready alla!')
})

// Dynamically react to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply({ content: 'There was a fucking terrible error while executing this shitty command! Just rethink you whole fucking useless life!', ephemeral: true})
    }
})

// Login to DC with token
client.login(token)