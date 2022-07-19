import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from '../dto/create-car.dto';
import { CarEntity } from '../entities/car.entity';
import { UpdateCarDto } from '../dto/update-car.dto';

@Injectable()
export class CarsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto): Promise<CarEntity> {
    return this.prisma.cars.create({
      data: createCarDto,
    });
  }

  async findAll(): Promise<CarEntity[]> {
    return this.prisma.cars.findMany();
  }

  async findOne(id: number): Promise<CarEntity> {
    return this.prisma.cars.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return this.prisma.cars.update({
      where: {
        id,
      },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return this.prisma.cars.delete({
      where: {
        id,
      },
    });
  }
}
