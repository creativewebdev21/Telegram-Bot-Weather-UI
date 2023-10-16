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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetController = void 0;
const common_1 = require("@nestjs/common");
const admin_model_1 = __importDefault(require("../model/admin.model"));
let AdminGetController = class AdminGetController {
    constructor() { }
    async getAdminAll() {
        try {
            const admins = await admin_model_1.default.find({}).lean();
            return {
                data: admins,
            };
        }
        catch (err) {
            return {
                data: "sadfdf",
            };
        }
    }
};
exports.AdminGetController = AdminGetController;
__decorate([
    (0, common_1.Get)("/api/admin/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminGetController.prototype, "getAdminAll", null);
exports.AdminGetController = AdminGetController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AdminGetController);
//# sourceMappingURL=admin.get.controller.js.map