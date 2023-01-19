// import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  HttpException,
  Param,
  ParseIntPipe,
  //   UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    console.log('Hello Controller');
    // throw new HttpException('api is broken', 401);
    return { cats: 'get all cat api' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    // console.log(param);
    // console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cats';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update a cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
