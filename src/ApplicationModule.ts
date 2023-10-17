import { Module } from "@nestjs/common"
import { RenderModule } from "nest-next"
import Next from "next"
import { NODE_ENV } from "../utils/constants/env"
import AppController from "./AppController"
import AdminController from "./controller/AdminController"
import UserController from "./controller/UserController"
import BlockedUserController from "./controller/BlockedUserController"

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false },
      }),
    ),
  ],
  controllers: [
    AppController,
    AdminController,
    UserController,
    BlockedUserController
  ],
})
export class AppModule {}
