"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});
exports.default = mongoose_1.models.Admin || (0, mongoose_1.model)("Admin", AdminSchema);
//# sourceMappingURL=admin.model.js.map