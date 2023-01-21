import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Cat } from 'src/cats/cats.schema';

export class CatRequestDto extends Cat {}
