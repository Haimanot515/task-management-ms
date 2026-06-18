import { NestFactory } from '@nestjs/core';
import { ApiGatwayModule } from './api-gatway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatwayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
