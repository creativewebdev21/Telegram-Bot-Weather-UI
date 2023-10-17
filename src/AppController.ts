import { Controller, Get, Render } from '@nestjs/common';

@Controller()
class AppController {
  @Render('home')
  @Get('/')
  public index() {
    
  }
}

export default AppController
