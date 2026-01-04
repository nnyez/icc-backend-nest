import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // elimina propiedades no permitidas
      forbidNonWhitelisted: true, // error si envían campos extra
      transform: true,        // transforma tipos
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
