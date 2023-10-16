"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_next_1 = require("nest-next");
const next_1 = __importDefault(require("next"));
const env_1 = require("../shared/constants/env");
const app_controller_1 = require("./app.controller");
const admin_get_controller_1 = require("./controller/admin.get.controller");
const admin_post_controller_1 = require("./controller/admin.post.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_next_1.RenderModule.forRootAsync((0, next_1.default)({ dev: env_1.NODE_ENV === "development" }), { viewsDir: null }),
        ],
        controllers: [app_controller_1.AppController, admin_get_controller_1.AdminGetController, admin_post_controller_1.AdminPostController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map