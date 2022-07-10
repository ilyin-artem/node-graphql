"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandsResolver = void 0;
exports.BandsResolver = {
    Query: {
        bands: (_, __, { dataSources }) => dataSources.bandsService.getBands(),
        band: (_, { id }, { dataSources }) => dataSources.bandsService.getBand(id),
    },
};
