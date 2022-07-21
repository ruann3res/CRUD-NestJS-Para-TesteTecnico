import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCarDto {
  @ApiProperty({
    description: 'Nome do veiculo',
    example: 'Chevrolet Onix 1.0 LT SPE/4',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  onSale: boolean;

  @ApiProperty({ description: 'Marca do veiculo', example: 'Chevrolet' })
  @IsNotEmpty()
  @IsString()
  marca: string;

  @ApiProperty({ description: 'Modelo do veiculo', example: 'Onix' })
  @IsNotEmpty()
  @IsNotEmpty()
  @IsString()
  modelo: string;

  @ApiProperty({ description: 'Ano do veiculo', example: '2018' })
  @IsString()
  @MinLength(2)
  @MaxLength(4)
  ano: string;
}
