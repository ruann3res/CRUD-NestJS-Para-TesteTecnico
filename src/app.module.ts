import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
