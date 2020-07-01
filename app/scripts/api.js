import axios from 'axios'

function createApi() {
    return axios.create({
        baseURL: "localhost:3035/"
    });
}

export class Api {

    static api = createApi();

    static getData(name) {
        return this.api.get('data/' + name);
    }
    static getAllData(name) {
        return this.api.get('data/');
    }

}
