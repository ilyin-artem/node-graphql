"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class UserService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }
    getUser(id) {
        return this.get(`/${id}`);
    }
    jwt(email, password) {
        return this.post('/login', {
            email,
            password,
        });
    }
    register(input) {
        return this.post('/register', {
            ...input,
        });
    }
    verify(token) {
        return this.post('/verify', {}, {
            headers: {
                authorization: token,
            },
        });
    }
}
exports.userService = new UserService();
