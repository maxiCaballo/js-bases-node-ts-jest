"use strict";
// const { v4: uuidv4 } = require('uuid');
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = void 0;
const uuid_1 = require("uuid");
const createID = () => {
    return (0, uuid_1.v4)();
};
exports.createID = createID;
// module.exports = {
// 	createID,
// };
