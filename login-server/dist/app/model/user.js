"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var user_schema = new mongoose_1.Schema({
    email: String,
    password: String
});
exports.default = mongoose_1.model("User", user_schema);
