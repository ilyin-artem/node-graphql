"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genresResolver = void 0;
exports.genresResolver = {
    Query: {
        genres: (_, __, { dataSources }) => dataSources.genresService.getGenres(),
        genre: (_, { id }, { dataSources }) => dataSources.genresService.getGenre(id),
    },
};
