import { Telegraf } from "telegraf"
import start from "./start"
import help from "./help"
import weather from "./weather"
import subscribe from "./subscribe"
import unsubscribe from "./unsubscribe"
import rejoin from "./rejoin"

const BOT_TOKEN = process.env.BOT_TOKEN || ""

const WeatherBot = new Telegraf(BOT_TOKEN)

start(WeatherBot)

help(WeatherBot)

subscribe(WeatherBot)

unsubscribe(WeatherBot)

weather(WeatherBot)

rejoin(WeatherBot)

export default WeatherBot
