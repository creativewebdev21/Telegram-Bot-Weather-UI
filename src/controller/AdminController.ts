import { Controller, Get, Post, Body } from "@nestjs/common"
import AdminModel from "../model/AdminModel"

@Controller()
class AdminController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get("/api/admin/all")
  public async getAdminAll() {
    try {
      const admins = await AdminModel.find({}).lean()
      return {
        data: admins as any,
      }
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/admin/getOne")
  public async getAdminByUserName(@Body() body: { username: string }) {
    const { username } = body

    try {
      const admin = await AdminModel.findOne({ username }).lean()

      return admin as any
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default AdminController
