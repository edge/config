"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var Config = (function () {
    function Config() {
    }
    Config.getEnvArray = function (key, defaultValue) {
        var value = process.env[key];
        return value ? value.split(',') : defaultValue;
    };
    Config.getEnvBoolean = function (key, defaultValue) {
        var value = process.env[key];
        return value ? value === 'true' : defaultValue;
    };
    Config.getEnvNumber = function (key, defaultValue) {
        var value = process.env[key];
        return value ? Number(value) : defaultValue;
    };
    Config.getEnvObject = function (key, defaultValue) {
        var value = process.env[key];
        return value ? JSON.parse(value) : defaultValue;
    };
    Config.getEnvString = function (key, defaultValue) {
        var value = process.env[key];
        return value ? value : defaultValue;
    };
    return Config;
}());
exports.Config = Config;
