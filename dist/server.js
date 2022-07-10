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
const geners_resolver_1 = require("./modules/genres/resolvers/geners.resolver");
const artists_service_1 = require("./modules/artists/services/artists.service");
const bands_service_1 = require("./modules/bands/services/bands.service");
const albums_service_1 = require("./modules/albums/services/albums.service");
const genres_service_1 = require("./modules/genres/services/genres.service");
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
            geners_resolver_1.genresResolver,
        ],
        dataSources: () => ({
            artistsService: artists_service_1.artistsService,
            bandsService: bands_service_1.bandsService,
            albumsService: albums_service_1.albumsService,
            genresService: genres_service_1.genresService,
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
