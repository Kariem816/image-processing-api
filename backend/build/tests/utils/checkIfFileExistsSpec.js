"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkIfFileExists_1 = __importDefault(require("../../utils/checkIfFileExists"));
describe('File Exist Tests', function () {
    it('should return true if a certain file exists in a directory', function () {
        var filePath = './src/images/fjord.jpg';
        expect((0, checkIfFileExists_1.default)(filePath)).toBe(true);
    });
    it("should return false if a certain file doesn't exist in a directory", function () {
        var filePath = './src/images/image.jpg';
        expect((0, checkIfFileExists_1.default)(filePath)).toBe(false);
    });
});
