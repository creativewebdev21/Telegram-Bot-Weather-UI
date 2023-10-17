import { Telegraf } from 'telegraf'
import start from './start';
import help from './help';

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN || "";
const WeatherAPIKey = process.env.WEATHER_API_KEY;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

console.log(BOT_TOKEN)

let isListening = false;

// Create the bot instance
const WeatherBot = new Telegraf(BOT_TOKEN);

// Start handler
start(WeatherBot)

// Handling "/help" command
help(WeatherBot)

export default WeatherBot
