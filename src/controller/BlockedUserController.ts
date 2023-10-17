import { Controller, Delete, Body, Post, Get } from "@nestjs/common"
import BlockedUser from "../model/BlockedUserModel"
import Subscriber from "../model/Subscriber"

@Controller()
class BlockedUserController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Delete("/api/admin/blocked")
  public async blockedUserDelete(@Body() body: { userid: Number }) {
    const { userid } = body

    try {
      await BlockedUser.findOneAndDelete({ userid }).lean()

      return { message: "deleted" }
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/admin/blocked")
  public async blockedUser(@Body() body: { userid: string; username: string }) {
    const { userid, username } = body

    try {
      await Subscriber.findOneAndDelete({ userid })

      const Blocked = new BlockedUser({
        userid,
        username,
      })

      const blockedUser = await Blocked.save()

      return blockedUser as any
    } catch (err: any) {
      throw new Error(err)
    }
  }

  
  @Get("/api/admin/blocked")
  public async blockedUserGet() {
    try {
      const blockedUsers = await BlockedUser.find({}).lean()

      return blockedUsers as any
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default BlockedUserController
