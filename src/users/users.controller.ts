import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ status: 409, description: 'Email already exists' })
  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  @IsPublic()
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/all')
  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado.' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
