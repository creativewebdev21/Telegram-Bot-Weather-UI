"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostController = void 0;
const common_1 = require("@nestjs/common");
const admin_model_1 = __importDefault(require("../model/admin.model"));
let AdminPostController = class AdminPostController {
    constructor() { }
    async getAdminByUserName(body) {
        const { username } = body;
        try {
            const admin = await admin_model_1.default.findOne({ username }).lean();
            return admin;
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
exports.AdminPostController = AdminPostController;
__decorate([
    (0, common_1.Post)("/api/admin/getOne"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPostController.prototype, "getAdminByUserName", null);
exports.AdminPostController = AdminPostController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AdminPostController);
//# sourceMappingURL=admin.post.controller.js.map