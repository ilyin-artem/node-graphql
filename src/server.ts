import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import cors from 'cors';
import 'dotenv/config';

async function startApolloServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    const typeDefs = gql`
        type Query {
            greetings: String
        }
    `;

    const resolvers = {};

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
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
