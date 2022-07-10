"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsResolver = void 0;
exports.albumsResolver = {
    Query: {
        albums: (_, { pagination }, { dataSources }) => dataSources.albumsService.getAlbums(pagination),
        album: (_, { id }, { dataSources }) => dataSources.albumsService.getAlbum(id),
    },
    Mutation: {
        createAlbum: (_, { input }, { dataSources }) => dataSources.albumsService.createAlbum(input),
        deleteAlbum: (_, { id }, { dataSources }) => dataSources.albumsService.deleteAlbum(id),
        updateAlbum: (_, { id, input }, { dataSources }) => dataSources.albumsService.updateAlbum(id, input),
    },
    Album: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getBandsByIds(bandsIds),
        artists: ({ artistsIds }, _, { dataSources }) => dataSources.artistsService.getArtistsByIds(artistsIds),
        tracks: ({ tracksIds }, _, { dataSources }) => dataSources.tracksService.getTracksByIds(tracksIds),
        genres: ({ genresIds }, _, { dataSources }) => dataSources.genresService.getGenresByIds(genresIds),
    },
};
