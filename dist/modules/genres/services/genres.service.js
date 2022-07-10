"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genresService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class GenresService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }
    getGenres() {
        return this.get("/").then((res) => res.items.map((item) => ({
            ...item,
            id: item._id,
        })));
    }
    getGenre(id) {
        return this.get(`/${id}`);
    }
    getGenresByIds(arrayIds) {
        return Promise.allSettled(arrayIds.map((id) => this.getGenre(id)));
    }
}
exports.genresService = new GenresService();
