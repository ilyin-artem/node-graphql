"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistsService = void 0;
const Service_1 = require("../../Service");
exports.artistsService = new Service_1.Service(process.env.ARTISTS_URL);
