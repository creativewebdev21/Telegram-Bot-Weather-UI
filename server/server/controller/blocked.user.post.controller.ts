import { Controller, Post, Body } from "@nestjs/common"
import BlockedUser from "../model/blocked.user.model"
import Subscriber from "../model/subscriber.model"

@Controller()
export class BlockedUserPostController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

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
      return "daaa"
    } catch (err) {
      throw new Error(err)
    }
  }
}
