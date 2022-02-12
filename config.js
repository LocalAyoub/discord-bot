module.exports = {
    app: {
        px: '@',
        token: 'OTQxODE4MDE5NjE5OTU4ODU1.YgbeYg.WqQK8CkKyQCQ1Z6sR2cWKURFolY',
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
