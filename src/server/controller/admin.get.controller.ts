import { Controller, Get } from "@nestjs/common"
import Admin from "../model/admin.model"

@Controller()
export class AdminGetController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get("/api/admin/all")
  public async getAdminAll() {
    try {
      const admins = await Admin.find({}).lean()
      return {
        data: admins as any,
      }
    } catch (err) {
      return {
        data: "sadfdf",
      }
    }
  }
}
