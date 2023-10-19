"use strict";
// const { createID } = require('./get-id-plugin');
// const { getAge } = require('./get-age-plugin');
// const { http } = require('./http-client-plugin');
// const buildLogger = require('./logger-plugin');
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.buildLogger = exports.createID = exports.getAge = void 0;
var get_age_plugin_1 = require("./get-age-plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var get_id_plugin_1 = require("./get-id-plugin");
Object.defineProperty(exports, "createID", { enumerable: true, get: function () { return get_id_plugin_1.createID; } });
var logger_plugin_1 = require("./logger-plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
var http_client_plugin_1 = require("./http-client-plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
// module.exports = {
// 	createID,
// 	getAge,
// 	http,
// 	buildLogger,
// };
