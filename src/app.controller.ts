import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // router.get("/", ...)  ->  @Get("/") getHello()...
  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    res: Response,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log(body, param);
    return 'Hello Cat!';
  }
}
