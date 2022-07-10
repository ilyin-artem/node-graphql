import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import cors from 'cors';
import { loadFiles } from '@graphql-tools/load-files';
import 'dotenv/config';

import { artistsResolver } from './modules/artists/resolvers/artists.resolver';
import { bandsResolver } from './modules/bands/resolvers/bands.resolver';
import { albumsResolver } from './modules/albums/resolvers/albums.resolver';
import { genresResolver } from './modules/genres/resolvers/genres.resolver';
import { tracksResolver } from './modules/tracks/resolvers/tracks.resolver';
import { userResolver } from './modules/users/resolvers/user.resolver';
import { favoritesResolver } from './modules/favorites/resolvers/favorities.resolver';

import { artistsService } from './modules/artists/services/artists.service';
import { bandsService } from './modules/bands/services/bands.service';
import { albumsService } from './modules/albums/services/albums.service';
import { genresService } from './modules/genres/services/genres.service';
import { tracksService } from './modules/tracks/services/tracks.service';
import { userService } from './modules/users/services/user.service';
import { favoritesService } from './modules/favorites/services/favorities.service';

async function startApolloServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const apolloServer = new ApolloServer({
        typeDefs: await loadFiles('src/**/*.graphql'),
        resolvers: [
            artistsResolver,
            bandsResolver,
            albumsResolver,
            genresResolver,
            tracksResolver,
            userResolver,
            favoritesResolver,
        ],
        dataSources: () => ({
            artistsService,
            bandsService,
            albumsService,
            genresService,
            tracksService,
            userService,
            favoritesService,
        }),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
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
