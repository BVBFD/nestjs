import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(body, param): string {
    console.log(body);
    console.log(param);
    return 'Hello World!';
  }
}
