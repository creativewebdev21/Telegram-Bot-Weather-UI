"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.PORT = exports.NODE_ENV = exports.isClient = exports.isServer = void 0;
exports.isServer = typeof window === "undefined";
exports.isClient = !exports.isServer;
exports.NODE_ENV = process.env.NODE_ENV;
exports.PORT = process.env.PORT || 3000;
exports.MONGO_URI = "mongodb://localhost:27017/telebot";
//# sourceMappingURL=env.js.map