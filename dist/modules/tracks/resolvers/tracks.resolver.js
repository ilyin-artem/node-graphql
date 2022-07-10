"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracksResolver = void 0;
exports.tracksResolver = {
    Query: {
        tracks: (_, __, { dataSources }) => dataSources.tracksService.getTracks(),
        track: (_, { id }, { dataSources }) => dataSources.tracksService.getTrack(id),
    },
    Track: {
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getBandsByIds(bandsIds),
        artists: ({ artistsIds }, _, { dataSources }) => dataSources.artistsService.getArtistsByIds(artistsIds),
        genres: ({ genresIds }, _, { dataSources }) => dataSources.genresService.getGenresByIds(genresIds),
        album: ({ albumId }, _, { dataSources }) => {
            dataSources.albumsService.getAlbum(albumId);
        },
    },
};
