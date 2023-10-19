import { Controller, Post, Body, Get } from "@nestjs/common"
import BotModel from "../model/BotModel"
import launch, { stop } from "../bot/WeatherBot"

@Controller()
class BotController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Post("/api/bot/update")
  public async updateBotKey(@Body() body: { key: string }) {
    const { key } = body

    try {
      const bot = await BotModel.findOneAndUpdate({ key }).lean()

      return bot as any
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/bot/relanuch")
  public async relaunch(@Body() body: { newKey: string; oldKey: string; newHandle: string }) {
    const { newKey, oldKey, newHandle } = body
    try {
      stop(oldKey)

      const updatedBot = await BotModel.findOneAndUpdate(
        { key: oldKey },
        { key: newKey, handle: newHandle },
      ).lean()

      if (!updatedBot) {
        const newBot = new BotModel({
          key: newKey,
          handle: newHandle,
        })

        await newBot.save()
      }

      launch(newKey)
    } catch (err: any) {
      console.log(err)
      throw new Error(err)
    }
  }

  @Get("/api/bot/getKey")
  public async getKey() {
    try {
      const bots = await BotModel.find({}).lean()

      if (bots.length) return bots[0]

      return { key: "" }
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default BotController
