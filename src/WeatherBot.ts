import User from './model/UserModel'
import Subscriber from './model/Subscriber'
import Admin from './model/AdminModel'
import { Telegraf } from 'telegraf'

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN || "";
const weatherAPIKey = process.env.WEATHER_API_KEY;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

console.log(BOT_TOKEN)

let isListening = false;

// Create the bot instance
const WeatherBot = new Telegraf(BOT_TOKEN);

// Start handler
WeatherBot.start(async (ctx) => {
    const userId = ctx.from.id;
    const username = ctx.from.username;
    const user = new User({
        username: username,
        userid: userId,
    });
    try {
        await user.save()
        ctx.reply('Welcome to the WEATHER UPDATE bot!\nThis is a publicly available bot made by Henry to get the weather information of a particular city of your choice... \n\n\nTap /help - To Get help with commands\n\nMade with ❤️ by Henry Ziad');
    } catch(err: any) {
        throw new Error(err)
    }
});

export default WeatherBot
