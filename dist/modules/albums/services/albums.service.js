"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class AlbumsService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }
    getAlbums(pagination) {
        return this.get('', { ...pagination }).then((res) => res.items);
    }
    getAlbum(id) {
        return this.get(`/${id}`);
    }
    createAlbum(input) {
        return this.post('', { ...input });
    }
    updateAlbum(id, input) {
        return this.put(`/${id}`, { ...input });
    }
    deleteAlbum(id) {
        return this.delete(`/${id}`);
    }
}
exports.albumsService = new AlbumsService();
