"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistsResolver = void 0;
exports.artistsResolver = {
    Query: {
        artists: (_, __, { dataSources }) => dataSources.artistsService.getItems(),
        artist: (_, { id }, { dataSources }) => dataSources.artistsService.getItem(id),
    },
    Mutation: {
        createArtist: (_, { input }, { dataSources }) => dataSources.artistsService.createItem(input),
        deleteArtist: (_, { id }, { dataSources }) => dataSources.artistsService.deleteItem(id),
        updateArtist: (_, { id, input }, { dataSources }) => dataSources.artistsService.updateItem(id, input),
    },
    Artist: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getItemsByIds(bandsIds),
    },
};
