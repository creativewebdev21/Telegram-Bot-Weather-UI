"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
    userid: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.models.User || (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=user.model.js.map