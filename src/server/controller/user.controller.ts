import { Get, Controller } from "@nestjs/common"
import User from "../model/user.model"

@Controller()
export class UserController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get("/api/user/all")
  public async getAllUsers() {
    try {
      const users = await User.find({}).lean()

      return users as any
    } catch (err) {
      throw new Error(err)
    }
  }
}
