import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @Post('/create')
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @Get('/all')
  findAll() {
    return this.carsService.findAll();
  }

  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
  @Get('/all/:limit')
  getWithPagination(@Param('limit') limit: string) {
    return this.carsService.getWithPagination(+limit);
  }
}
