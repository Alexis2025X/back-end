import { Injectable } from '@nestjs/common';

@Injectable()//Decorador de typescript
export class AppService {//
  getHello(): string {
    return 'Hello Marlon!';
  }
  byeWorld(){
    console.log('Bye World!');
    return 'Bye World!';
  }
  suma(){
    return 5 + 2
  }
}
