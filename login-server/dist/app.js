"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var database_1 = require("./config/database");
var app = express_1.default();
//database
mongoose_1.default.connect(database_1.mongoURL(), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(function () { return console.log("Mongo Ready"); })
    .catch(function (error) { return console.log(error); });
//settings
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//routes
//static
exports.default = app;
