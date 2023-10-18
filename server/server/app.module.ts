import { Module } from "@nestjs/common"
import { RenderModule } from "nest-next"
import Next from "next"
import { NODE_ENV } from "../../utils/constants/env"
import AdminController from "../controller/AdminController"
import UserController from "../controller/UserController"

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === "development" }), { viewsDir: null }),
  ],
  controllers: [AppController, AdminController, UserController],
})
export class AppModule {}
