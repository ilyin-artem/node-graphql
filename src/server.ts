import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import cors from 'cors';
import { loadFiles } from '@graphql-tools/load-files';
import 'dotenv/config';

import { ArtistsResolver } from './modules/artists/resolvers/artists.resolver';
import { BandsResolver } from './modules/bands/resolvers/bands.resolver';
import { artistsService } from './modules/artists/services/artists.service';
import { bandsService } from './modules/bands/services/bands.service';

async function startApolloServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const apolloServer = new ApolloServer({
        typeDefs: await loadFiles('src/**/*.graphql'),
        resolvers: [ArtistsResolver, BandsResolver],
        dataSources: () => ({
            artistsService,
            bandsService,
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
