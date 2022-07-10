"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandsService = void 0;
const Service_1 = require("../../Service");
exports.bandsService = new Service_1.Service(process.env.BANDS_URL);
