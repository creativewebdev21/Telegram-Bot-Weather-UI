import { NestFactory } from '@nestjs/core';
import { AppModule } from './ApplicationModule';
import { NestExpressApplication } from '@nestjs/platform-express';
import mongoose from "mongoose"
import { MONGO_URI } from "../utils/constants/env"
import { join } from 'path';
import WeatherBot from './bot/WeatherBot';

async function bootstrap() {
  const opts = {
    bufferCommands: false,
  }

  mongoose.set("strictQuery", false)
  // Connect to MongoDB database
  mongoose
    .connect(MONGO_URI, opts)
    .then(() => {
      console.log("Connected to Database!")
    })
    .catch((error) => {
      console.log("Error connecting to Database : ", error.message)
    })

  WeatherBot.launch()
  WeatherBot.catch((error) => {
    console.log('Bot Error:', error);
  });

  const server = await NestFactory.create<NestExpressApplication>(AppModule);

  server.useStaticAssets(join(__dirname, '..', 'public'))

  await server.listen(3000);
}

bootstrap();
