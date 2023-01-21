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
  Body,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from 'src/dto/cats.request.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiProperty,
} from '@nestjs/swagger';
import { ReadOnlyCatDto } from 'src/dto/cat.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @ApiResponse({
    status: 200,
    description: 'Server Success!',
    type: ReadOnlyCatDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Server Error!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
