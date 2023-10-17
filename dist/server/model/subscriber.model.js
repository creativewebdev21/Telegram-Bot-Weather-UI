"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SubscriberSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
    userid: {
        type: Number,
        required: true,
    },
});
exports.default = mongoose_1.models.Subscriber ||
    (0, mongoose_1.model)("Subscriber", SubscriberSchema);
//# sourceMappingURL=subscriber.model.js.map