module.exports = {
    app: {
        px: '!',
        token: 'OTQxODE4MDE5NjE5OTU4ODU1.YgbeYg.UZXylB1UraYkq9Ma5K-ohfHk5GM',
        playing: 'in Elias achtertuin.'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
