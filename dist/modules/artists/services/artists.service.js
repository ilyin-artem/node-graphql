"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistsService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class ArtistsService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }
    getArtists() {
        return this.get("/").then((res) => res.items.map((item) => ({
            ...item,
            id: item._id,
            bands: item.bandsIds,
        })));
    }
    getArtist(id) {
        return this.get(`/${id}`);
    }
}
exports.artistsService = new ArtistsService();
