/* eslint-disable no-console */
import { NestFactory } from "@nestjs/core"
import mongoose from "mongoose"
import { MONGO_URI } from "shared/constants/env"
import { AppModule } from "./app.module"

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

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
