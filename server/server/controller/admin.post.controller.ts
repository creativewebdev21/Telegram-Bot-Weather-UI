import { Controller, Post, Body } from "@nestjs/common"
import Admin from "../model/admin.model"

@Controller()
export class AdminPostController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Post("/api/admin/getOne")
  public async getAdminByUserName(@Body() body: { username: string }) {
    const { username } = body

    try {
      const admin = await Admin.findOne({ username }).lean()

      return admin as any
    } catch (err) {
      throw new Error(err)
    }
  }
}
