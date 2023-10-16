"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlockedUserSchema = new mongoose_1.Schema({
    userid: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
    },
});
exports.default = mongoose_1.models.BlockedUser ||
    (0, mongoose_1.model)("BlockedUser", BlockedUserSchema);
//# sourceMappingURL=blocked.user.model.js.map