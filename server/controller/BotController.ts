import { Controller, Post, Body } from "@nestjs/common"
import BotModel from "../model/BotModel"

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
}

export default BotController
