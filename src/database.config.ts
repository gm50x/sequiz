import { Injectable } from "@nestjs/common";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize'
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DatabaseConfig implements SequelizeOptionsFactory {

  constructor(private readonly config: ConfigService) { }

  createSequelizeOptions(): SequelizeModuleOptions | Promise<SequelizeModuleOptions> {
    return {
      dialect: 'mysql',
      host: this.config.get('MYSQL_HOST'),
      port: this.config.get('MYSQL_PORT'),
      database: this.config.get('MYSQL_DATABASE'),
      username: this.config.get('MYSQL_USER'),
      password: this.config.get('MYSQL_PASSWORD'),
      autoLoadModels: true,
      synchronize: this.config.get('NODE_ENV') === 'development',

    }
  }
}