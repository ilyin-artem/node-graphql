"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandsResolver = void 0;
exports.bandsResolver = {
    Query: {
        bands: (_, __, { dataSources }) => dataSources.bandsService.getBands(),
        band: (_, { id }, { dataSources }) => dataSources.bandsService.getBand(id),
    },
    Band: {
        id: ({ _id }) => _id,
    },
};
