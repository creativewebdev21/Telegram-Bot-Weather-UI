import BlockedUser from "server/model/blocked.user.model"
import { Controller, Delete, Body } from "@nestjs/common"

@Controller()
export class BlockedUserDeleteController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Delete("/api/admin/blocked")
  public async blockedUserDelete(@Body() body: { userid: Number }) {
    const { userid } = body

    try {
      await BlockedUser.findOneAndDelete({ userid }).lean()

      return { message: "deleted" }
    } catch (err) {
      throw new Error(err)
    }
  }
}
