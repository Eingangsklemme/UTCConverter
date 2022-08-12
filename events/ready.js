module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready motherfucker! Logged in as ${client.user.tag}`)
    },
}