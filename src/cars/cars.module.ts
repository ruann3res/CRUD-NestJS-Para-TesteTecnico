import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarsRepository } from './repositories/cars.repository';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService, CarsRepository],
})
export class CarsModule {}
