const fs = require('node:fs')
const path = require('node:path')
const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const { clientId, token } = require('./config.json')


// !!! List with commands !!!
const commands = []
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(token)

/*
new SlashCommandBuilder().setName('cock').setDescription('makes something useful i guess idk lol'),
new SlashCommandBuilder().setName('time-utc').setDescription('Outputs the current UTC time'),
new SlashCommandBuilder().setName('timezone-add').setDescription('Adds one timezone to your list'),
new SlashCommandBuilder().setName('timezone-remove').setDescription('Removes one timezone of your list'),
*/

/* Only for one guild (guildId in config.json)
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)
*/

// deploys commands globally in every guild
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)