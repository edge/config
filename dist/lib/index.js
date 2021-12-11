"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = require("fs");
dotenv_1["default"].config();
var Config = (function () {
    function Config() {
    }
    Config.getEnvArray = function (key, defaultValue, delimiter) {
        if (delimiter === void 0) { delimiter = ','; }
        var value = process.env[key];
        return value ? value.split(delimiter) : defaultValue;
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
    Config.ifEnvStringEquals = function (key, value, trueValue, falseValue) {
        var envValue = process.env[key];
        return envValue === value ? trueValue : falseValue;
    };
    Config.ifEnvBooleanIsTrue = function (key, trueValue, falseValue) {
        var envValue = process.env[key];
        return envValue === 'true' ? trueValue : falseValue;
    };
    Config.getFileArray = function (filePath, defaultValue, delimiter) {
        if (delimiter === void 0) { delimiter = ','; }
        try {
            return (0, fs_1.readFileSync)(filePath, 'utf8').split(delimiter);
        }
        catch (e) {
            return defaultValue;
        }
    };
    Config.getFileBoolean = function (filePath, defaultValue) {
        try {
            return (0, fs_1.readFileSync)(filePath, 'utf8') === 'true';
        }
        catch (e) {
            return defaultValue;
        }
    };
    Config.getFileNumber = function (filePath, defaultValue) {
        try {
            return Number((0, fs_1.readFileSync)(filePath, 'utf8'));
        }
        catch (e) {
            return defaultValue;
        }
    };
    Config.getFileObject = function (filePath, defaultValue) {
        try {
            return JSON.parse((0, fs_1.readFileSync)(filePath, 'utf8'));
        }
        catch (e) {
            return defaultValue;
        }
    };
    Config.getFileString = function (filePath, defaultValue) {
        try {
            return (0, fs_1.readFileSync)(filePath, 'utf8');
        }
        catch (e) {
            return defaultValue;
        }
    };
    return Config;
}());
exports.Config = Config;
