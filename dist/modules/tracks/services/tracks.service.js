"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracksService = void 0;
const Service_1 = require("../../Service");
exports.tracksService = new Service_1.Service(process.env.TRACKS_URL);
