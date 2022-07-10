"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
async function startApolloServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    const typeDefs = (0, apollo_server_express_1.gql) `
        type Query {
            greetings: String
        }
    `;
    const resolvers = {};
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
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
