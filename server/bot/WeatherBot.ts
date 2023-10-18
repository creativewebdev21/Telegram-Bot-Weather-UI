import { Telegraf } from "telegraf"
import start from "./start"
import help from "./help"
import weather from "./weather"
import subscribe from "./subscribe"
import unsubscribe from "./unsubscribe"
import rejoin from "./rejoin"

let WeatherBot: any

const launch = (botKey: string) => {
  console.log(botKey)
  
  WeatherBot = new Telegraf(botKey)

  start(WeatherBot)

  help(WeatherBot)

  subscribe(WeatherBot)

  unsubscribe(WeatherBot)

  weather(WeatherBot)

  rejoin(WeatherBot)

  WeatherBot.launch().then(() => {
    console.log(`Bot-${botKey} is running`)
  })
  WeatherBot.catch((error: any) => {
    console.log("Bot Error:", error)
  })
}

export const stop = (botKey: string) => {
  try {
    WeatherBot.stop("Stopped by admin")
    console.log(`Bot-${botKey} is stopped`)
  } catch (err) {
    console.log(`Bot-${botKey} is not running`)
  }
}

export default launch
