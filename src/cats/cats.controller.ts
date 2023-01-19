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
    return this.catsService.getAllCat();
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    return this.catsService.getOneCat(param);
  }

  @Post()
  createCat() {
    return this.catsService.createCat();
  }

  @Put(':id')
  updateCat() {
    return this.catsService.updateCat();
  }

  @Patch(':id')
  updatePartialCat() {
    return this.catsService.updatePartialCat();
  }

  @Delete(':id')
  deleteCat() {
    return this.catsService.deleteCat();
  }
}
