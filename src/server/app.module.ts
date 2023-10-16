// ./src/server/app.module.ts
import { Module } from "@nestjs/common"
import { RenderModule } from "nest-next"
import Next from "next"
import { NODE_ENV } from "shared/constants/env"
import { AppController } from "./app.controller"
import { AdminGetController } from "./controller/admin.get.controller"

@Module({
  /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === "development" }), { viewsDir: null }),
  ],
  controllers: [AppController, AdminGetController],
})
export class AppModule {}
