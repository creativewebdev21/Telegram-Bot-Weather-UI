"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../shared/constants/env");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const opts = {
        bufferCommands: false,
    };
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default
        .connect(env_1.MONGO_URI, opts)
        .then(() => {
        console.log("Connected to Database!");
    })
        .catch((error) => {
        console.log("Error connecting to Database : ", error.message);
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map