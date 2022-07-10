"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genresService = void 0;
const Service_1 = require("../../Service");
exports.genresService = new Service_1.Service(process.env.GENRES_URL);
