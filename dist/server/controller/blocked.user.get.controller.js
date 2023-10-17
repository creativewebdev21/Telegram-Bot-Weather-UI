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
exports.BlockedUserGetController = void 0;
const common_1 = require("@nestjs/common");
const blocked_user_model_1 = __importDefault(require("../model/blocked.user.model"));
let BlockedUserGetController = class BlockedUserGetController {
    constructor() { }
    async blockedUserGet() {
        try {
            const blockedUsers = await blocked_user_model_1.default.find({}).lean();
            return blockedUsers;
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
exports.BlockedUserGetController = BlockedUserGetController;
__decorate([
    (0, common_1.Get)("/api/admin/blocked"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlockedUserGetController.prototype, "blockedUserGet", null);
exports.BlockedUserGetController = BlockedUserGetController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], BlockedUserGetController);
//# sourceMappingURL=blocked.user.get.controller.js.map