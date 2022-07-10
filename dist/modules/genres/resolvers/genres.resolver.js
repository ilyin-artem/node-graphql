"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genresResolver = void 0;
exports.genresResolver = {
    Query: {
        genres: (_, { pagination }, { dataSources }) => dataSources.genresService.getItems(pagination),
        genre: (_, { id }, { dataSources }) => dataSources.genresService.getItem(id),
    },
    Mutation: {
        createGenre: (_, { input }, { dataSources }) => dataSources.genresService.createItem(input),
        deleteGenre: (_, { id }, { dataSources }) => dataSources.genresService.deleteItem(id),
        updateGenre: (_, { id, input }, { dataSources }) => dataSources.genresService.updateItem(id, input),
    },
    Genre: {
        id: ({ _id }) => _id,
    },
};
