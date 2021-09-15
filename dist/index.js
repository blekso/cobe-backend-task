"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const groceries_1 = require("./routes/groceries");
const app = (0, express_1.default)();
mongoose_1.default
    .connect("mongodb://localhost/grocery-list")
    .then(() => console.log("Connected to MongoDB.."))
    .catch((err) => console.error("Cound not connect to MongoDB..", err));
app.use("/api/groceries", groceries_1.router);
//set PORT=5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
//# sourceMappingURL=index.js.map