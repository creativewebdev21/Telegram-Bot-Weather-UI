// ./src/server/app.controller.ts
import { Controller, Get, Render } from "@nestjs/common"

@Controller()
export class AppController {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  @Get()
  @Render("index")
  home() {}
}
