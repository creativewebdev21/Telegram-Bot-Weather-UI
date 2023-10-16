import { Get, Controller } from "@nestjs/common"
import BlockedUser from "../model/blocked.user.model"

@Controller()
export class BlockedUserGetController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get("/api/admin/blocked")
  public async blockedUserGet() {
    try {
      const blockedUsers = await BlockedUser.find({}).lean()

      return blockedUsers as any
    } catch (err) {
      throw new Error(err)
    }
  }
}
