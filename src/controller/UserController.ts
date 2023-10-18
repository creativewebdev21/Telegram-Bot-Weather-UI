import { Get, Controller, Post, Body } from "@nestjs/common"
import User from "../model/UserModel"

@Controller()
class UserController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get("/api/user/all")
  public async getAllUsers() {
    try {
      const users = await User.find({}).lean()

      return users as any
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/user/blocked")
  public async userBlocked(@Body() body: { userid: Number }) {
    const { userid } = body

    try {
      await User.findOneAndUpdate({ userid }, { blocked: true }).lean()

      return { message: "blocked" }
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/user/unblocked")
  public async userUnBlocked(@Body() body: { userid: Number }) {
    const { userid } = body

    try {
      await User.findOneAndUpdate({ userid }, { blocked: false }).lean()

      return { message: "unblocked" }
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default UserController
