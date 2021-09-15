"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grocery = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Grocery = mongoose_1.default.model("grocery", new mongoose_1.default.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
}));
//# sourceMappingURL=grocery.js.map