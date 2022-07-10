"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const cors_1 = __importDefault(require("cors"));
const load_files_1 = require("@graphql-tools/load-files");
require("dotenv/config");
const artists_resolver_1 = require("./modules/artists/resolvers/artists.resolver");
const bands_resolver_1 = require("./modules/bands/resolvers/bands.resolver");
const albums_resolver_1 = require("./modules/albums/resolvers/albums.resolver");
const genres_resolver_1 = require("./modules/genres/resolvers/genres.resolver");
const tracks_resolver_1 = require("./modules/tracks/resolvers/tracks.resolver");
const user_resolver_1 = require("./modules/users/resolvers/user.resolver");
const favorities_resolver_1 = require("./modules/favorites/resolvers/favorities.resolver");
const artists_service_1 = require("./modules/artists/services/artists.service");
const bands_service_1 = require("./modules/bands/services/bands.service");
const albums_service_1 = require("./modules/albums/services/albums.service");
const genres_service_1 = require("./modules/genres/services/genres.service");
const tracks_service_1 = require("./modules/tracks/services/tracks.service");
const user_service_1 = require("./modules/users/services/user.service");
const favorities_service_1 = require("./modules/favorites/services/favorities.service");
async function startApolloServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs: await (0, load_files_1.loadFiles)('src/**/*.graphql'),
        resolvers: [
            artists_resolver_1.artistsResolver,
            bands_resolver_1.bandsResolver,
            albums_resolver_1.albumsResolver,
            genres_resolver_1.genresResolver,
            tracks_resolver_1.tracksResolver,
            user_resolver_1.userResolver,
            favorities_resolver_1.favoritesResolver,
        ],
        dataSources: () => ({
            artistsService: artists_service_1.artistsService,
            bandsService: bands_service_1.bandsService,
            albumsService: albums_service_1.albumsService,
            genresService: genres_service_1.genresService,
            tracksService: tracks_service_1.tracksService,
            userService: user_service_1.userService,
            favoritesService: favorities_service_1.favoritesService,
        }),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    const PORT = process.env.PORT || 3000;
    app.use('/', (req, res, next) => {
        res.send({ message: 'Hello' });
    });
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT}`);
        console.log(`Graphql Endpoint: ${apolloServer.graphqlPath}`);
    });
}
startApolloServer();
