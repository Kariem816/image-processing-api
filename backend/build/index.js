"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var resize_1 = __importDefault(require("./routers/resize"));
var centerDiv_1 = __importDefault(require("./utils/centerDiv"));
var avialable_1 = __importDefault(require("./routers/avialable"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send((0, centerDiv_1.default)('Home Page'));
});
app.use('/', resize_1.default);
app.get('/resize', function (req, res) {
    res.status(404).send((0, centerDiv_1.default)('Please include a valid filename in the URL'));
});
app.use('/resizeavailable', avialable_1.default);
app.get('/*', function (req, res) {
    res.status(404).send((0, centerDiv_1.default)('404 ERROR'));
});
app.listen(port, function () {
    "Server started on localhost:".concat(port);
});
exports.default = app;
