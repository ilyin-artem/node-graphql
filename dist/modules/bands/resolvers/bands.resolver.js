"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandsResolver = void 0;
exports.bandsResolver = {
    Query: {
        bands: (_, __, { dataSources }) => dataSources.bandsService.getItems(),
        band: (_, { id }, { dataSources }) => dataSources.bandsService.getItem(id),
    },
    Mutation: {
        createBand: (_, { input }, { dataSources }) => dataSources.bandsService.createItem(input),
        deleteBand: (_, { id }, { dataSources }) => dataSources.bandsService.deleteItem(id),
        updateBand: (_, { id, input }, { dataSources }) => dataSources.bandsService.updateItem(id, input),
    },
    Band: {
        id: ({ _id }) => _id,
        genres: ({ genresIds }, _, { dataSources }) => dataSources.genresService.getItemsByIds(genresIds),
        members: ({ members }, _, { dataSources }) => Promise.allSettled(members.map(({ artist }) => dataSources.artistsService.getItem(artist))).then((res) => res.map((item, index) => {
            const { value } = item;
            return {
                firstName: value.firstName,
                secondName: value.secondName,
                middleName: value.middleName,
                instrument: members[index].instrument,
                years: members[index].years,
            };
        })),
    },
};
