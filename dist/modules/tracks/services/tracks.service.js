"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracksService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class TracksService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }
    getTracks() {
        return this.get('/').then((res) => res.items.map((item) => ({
            ...item,
            id: item._id,
            album: item.albumId,
            bands: item.bandsIds,
            artists: item.artistsIds,
            genres: item.genresIds,
        })));
    }
    getTrack(id) {
        return this.get(`/${id}`);
    }
    getTracksByIds(arrayIds) {
        return Promise.allSettled(arrayIds.map((id) => this.getTrack(id)));
    }
}
exports.tracksService = new TracksService();
