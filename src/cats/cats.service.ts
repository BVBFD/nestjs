import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServiceProduct() {
    return 'Hello Cat!';
  }

  getAllCat() {
    // throw new HttpException('api is broken', 401);
    return { cats: 'get all cat api' };
  }

  getOneCat(param: number) {
    // console.log(param);
    // console.log(typeof param);
    return 'one cat';
  }

  createCat() {
    return 'create cat';
  }

  updateCat() {
    return 'update cats';
  }

  updatePartialCat() {
    return 'update a cat';
  }

  deleteCat() {
    return 'delete service';
  }
}
