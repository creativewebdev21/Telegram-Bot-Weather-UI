import { Controller, Get, Post, Body, Render } from "@nestjs/common"
import AdminModel from "../model/AdminModel"
import AdminDTO from '../../DTO/admin.dto'

@Controller()
class AdminController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Render('admin')
  @Get('/admin')
  public index() {
    
  }

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
  public async getAdminByUserName(@Body() body: { email: string }) {
    const { email } = body

    try {
      const admin = await AdminModel.findOne({ email }).lean()

      return admin as any
    } catch (err: any) {
      throw new Error(err)
    }
  }

  @Post("/api/admin/add")
  public async addNewAdmin(@Body() body: AdminDTO) {
    try {
      const userData = await AdminModel.findOne({email: body.email})

      if(userData) return userData

      const data = await AdminModel.create({
        ...body
      })

      return data
    } catch(err: any) {
      throw new Error(err)
    }
  }
}

export default AdminController
