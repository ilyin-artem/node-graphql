"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
exports.userResolver = {
    Query: {
        user: (_, { id }, { dataSources }) => dataSources.userService.getUser(id),
        jwt: (_, { email, password }, { dataSources }) => dataSources.userService.jwt(email, password),
    },
    Mutation: {
        register: (_, { input }, { dataSources }) => dataSources.userService.register(input),
    },
    User: {
        secondName: ({ lastName }) => lastName,
    },
};
