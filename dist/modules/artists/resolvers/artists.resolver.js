"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsResolver = void 0;
exports.ArtistsResolver = {
    Query: {
        artists: (_, __, { dataSources }) => dataSources.artistsService.getArtists(),
        artist: (_, { id }, { dataSources }) => dataSources.artistsService.getArtist(id),
    },
};
