"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class FavoritesService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVORITES_URL;
    }
    getFavorites() {
        return this.get('', {}, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
    addItem(id, type) {
        return this.put('add', { type, id }, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
    deleteItem(id, type) {
        return this.put('remove', { type, id }, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
}
exports.favoritesService = new FavoritesService();
