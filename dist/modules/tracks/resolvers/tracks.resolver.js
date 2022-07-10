"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracksResolver = void 0;
exports.tracksResolver = {
    Query: {
        tracks: (_, { pagination }, { dataSources }) => dataSources.tracksService.getItems(pagination),
        track: (_, { id }, { dataSources }) => dataSources.tracksService.getItem(id),
    },
    Mutation: {
        createTrack: (_, { input }, { dataSources }) => dataSources.tracksService.createItem(input),
        deleteTrack: (_, { id }, { dataSources }) => dataSources.tracksService.deleteItem(id),
        updateTrack: (_, { id, input }, { dataSources }) => dataSources.tracksService.updateItem(id, input),
    },
    Track: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getItemsByIds(bandsIds),
        artists: ({ artistsIds }, _, { dataSources }) => dataSources.artistsService.getItemsByIds(artistsIds),
        genres: ({ genresIds }, _, { dataSources }) => dataSources.genresService.getItemsByIds(genresIds),
        album: ({ albumId }, _, { dataSources }) => {
            dataSources.albumsService.getItem(albumId);
        },
    },
};
