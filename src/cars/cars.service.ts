import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private readonly repository: CarsRepository) {}
  create(createCarDto: CreateCarDto) {
    return this.repository.create(createCarDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.repository.update(id, updateCarDto);
  }

  remove(id: number) {
    return { message: 'ok' };
  }
  getWithPagination(limit: number) {
    return this.repository.getWithPagination(limit);
  }
}
