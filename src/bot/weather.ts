import Subscriber from "../model/Subscriber"
import BlockedUser from "../model/BlockedUserModel"
import axios from "axios"

const WeatherAPIKey = process.env.WEATHER_API_KEY
let isListening = false

const weather = (bot: any) => {
  bot.command("weather", async (ctx: any) => {
    isListening = true

    const blockedUser = await BlockedUser.findOne({ userid: ctx.from.id })

    if (blockedUser) {
      ctx.reply("You have been blocked from using this bot!\nContact the bot owner to unblock you.")
      return
    }

    const subscriber = await Subscriber.findOne({ userid: ctx.from.id })

    if (!subscriber) {
      ctx.reply(
        "You have not subscribed to get Weather Updates!\nUse /subscribe to subscribe to the bot.",
      )
      return
    }

    ctx.reply("Enter the name of the city to get weather data: ")

    bot.hears(/.*/, async (ctx: any) => {
      if (!isListening) {
        ctx.reply("No command Specified...")
        return
      }

      const messageText = ctx.message.text
      const city = messageText

      // Fetch URL for weather data request from OpenWeatherMap API
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?APPID=${WeatherAPIKey}&q=${city}`

      try {
        const response = await axios.get(apiUrl)

        // Extract the weather data from the API response
        const weatherData = response.data

        // Extract the relevant weather information from the API response
        const cityName = weatherData.city.name
        const country = weatherData.city.country
        const date_txt = weatherData.list[0].dt_txt
        const date = date_txt.split(" ")[0]
        const temperature = weatherData.list[0].main.temp
        const condition = weatherData.list[0].weather[0].description
        const windSpeed = weatherData.list[0].wind.speed
        const coord = weatherData.city.coord
        const population = weatherData.city.population
        const time = new Date().toLocaleTimeString()

        ctx.reply(
          `Current weather in ${cityName}, ${country} :- \n\nTemp: ${temperature}K, ${condition} \nDate: ${date}, Time: ${time}\nWind Speed: ${windSpeed}m/s\nPopulation: ${population}\nCoordinates: ${coord.lon}, ${coord.lat}`,
        )

        isListening = false
      } catch (error: any) {
        console.log("Error fetching weather data:", error.message)
        ctx.reply("City not found!\nPlease enter a valid city name...")
        return
      }
    })
  })
}

export default weather
