import { Telegraf } from "telegraf"
import start from "./start"
import help from "./help"
import weather from "./weather"
import subscribe from "./subscribe"
import unsubscribe from "./unsubscribe"

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN || ""

// Create the bot instance
const WeatherBot = new Telegraf(BOT_TOKEN)

// Start handler
start(WeatherBot)

// Handling "/help" command
help(WeatherBot)

// Handling "/subscribe" command
subscribe(WeatherBot)

// Handling "/unsubscribe" command
unsubscribe(WeatherBot)

// Handling "/weather" command
weather(WeatherBot)

export default WeatherBot
