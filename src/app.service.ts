import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
  ) { }
  getHello(): Promise<Array<User>> {
    return this.userModel.findAll();
  }
}
