const help = (bot: any) => {
    bot.command('help', (ctx: any) => {
        ctx.reply('The Bot Commands are as follows:\n\n/subscribe - Subscribe to bot\n/weather - Get the current weather data\n/unsubscribe - Unsubscribe from bot');
    });
}

export default help