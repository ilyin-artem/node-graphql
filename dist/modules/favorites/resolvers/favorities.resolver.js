"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesResolver = void 0;
const favorites_types_1 = require("../favorites.types");
exports.favoritesResolver = {
    Query: {
        favourites: (_, __, { dataSources }) => dataSources.favoritesService.getFavorites(),
    },
    Mutation: {
        addTrackToFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.addItem(id, favorites_types_1.TypeFavoriteItem.tracks),
        addBandToFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.addItem(id, favorites_types_1.TypeFavoriteItem.bands),
        addArtistToFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.addItem(id, favorites_types_1.TypeFavoriteItem.artists),
        addGenreToFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.addItem(id, favorites_types_1.TypeFavoriteItem.genres),
        deleteTrackFromFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.deleteItem(id, favorites_types_1.TypeFavoriteItem.tracks),
        deleteBandFromFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.deleteItem(id, favorites_types_1.TypeFavoriteItem.bands),
        deleteArtistFromFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.deleteItem(id, favorites_types_1.TypeFavoriteItem.artists),
        deleteGenreFromFavourites: (_, { id }, { dataSources }) => dataSources.favoritesService.deleteItem(id, favorites_types_1.TypeFavoriteItem.genres),
    },
    Favourites: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => dataSources.bandsService.getItemsByIds(bandsIds),
        artists: ({ artistsIds }, _, { dataSources }) => dataSources.artistsService.getItemsByIds(artistsIds),
        tracks: ({ tracksIds }, _, { dataSources }) => dataSources.tracksService.getItemsByIds(tracksIds),
        genres: ({ genresIds }, _, { dataSources }) => dataSources.genresService.getItemsByIds(genresIds),
    },
};
