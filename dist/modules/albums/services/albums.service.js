"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsService = void 0;
const Service_1 = require("../../Service");
exports.albumsService = new Service_1.Service(process.env.ALBUMS_URL);
