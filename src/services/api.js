import Axios from "axios";
import { stringify } from "qs";

function createAxios() {
    const axios = Axios.create();

    axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/`;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.timeout = 120000; // 2*60*1000 = 120000 = 2 minutes

    axios.interceptors.response.use(
        (response) => response?.data,
        (error) => {
            //   if (error?.response?.status === 401) { // unauthorized call
            //     return store.dispatch(logout());
            //   }
            if (error?.response?.data) return Promise.reject(error.response.data);

            return Promise.reject(error);
        }
    );
    return axios;
}

// Initialise Axios
const api = createAxios();

const service = {
    get(route, query = {}, options = {}) {
        return api.get(`${route}?${stringify(query)}`, options);
    },
    post(route, payload = {}, options = {}) {
        return api.post(route, payload, options);
    },
};

export default service;