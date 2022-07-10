"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.artistsService.getTracksForHome();
        },
        // get a single track by ID, for the track page
        track: (_, { id }, { dataSources }) => {
            return dataSources.artistsService.getTrack(id);
        },
        // get a single module by ID, for the module detail page
        module: (_, { id }, { dataSources }) => {
            return dataSources.artistsService.getModule(id);
        },
    },
    Mutation: {
        // increments a track's numberOfViews property
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.artistsService.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track,
                };
            }
            catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null,
                };
            }
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.artistsService.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.artistsService.getTrackModules(id);
        },
    },
};
