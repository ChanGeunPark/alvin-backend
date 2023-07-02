import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Heroku will set the PORT environment variable for you, so you don't need to hardcode it.
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
