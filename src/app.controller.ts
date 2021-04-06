import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Promise<Array<User>> {
    return this.appService.getHello();
  }
}
