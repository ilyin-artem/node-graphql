"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class Service extends apollo_datasource_rest_1.RESTDataSource {
    constructor(url) {
        super();
        this.baseURL = url;
    }
    getItems(pagination) {
        return this.get('', { ...pagination }).then((res) => res.items);
    }
    getItem(id) {
        return this.get(`/${id}`);
    }
    createItem(input) {
        return this.post('', { ...input }, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
    updateItem(id, input) {
        return this.put(`/${id}`, { ...input }, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
    deleteItem(id) {
        return this.delete(`/${id}`, {}, {
            headers: {
                authorization: this.context.token,
            },
        });
    }
    getItemsByIds(arrayIds) {
        return Promise.allSettled(arrayIds.map((id) => this.getItem(id))).then((res) => res.map((item) => item.value));
    }
}
exports.Service = Service;
