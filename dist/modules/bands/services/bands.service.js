"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandsService = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class BandsService extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }
    getBands() {
        return this.get('/').then((res) => res.items.map((item) => ({
            ...item,
            id: item._id,
            bands: item.bandId,
        })));
    }
    getBand(id) {
        return this.get(`/${id}`);
    }
}
exports.bandsService = new BandsService();
