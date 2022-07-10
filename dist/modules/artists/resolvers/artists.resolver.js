"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistsResolver = void 0;
exports.artistsResolver = {
    Query: {
        artists: (_, __, { dataSources }) => dataSources.artistsService.getArtists(),
        artist: (_, { id }, { dataSources }) => dataSources.artistsService.getArtist(id),
    },
    Artist: {
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getBandsByIds(bandsIds),
    },
};
