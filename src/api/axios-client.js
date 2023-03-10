import axios from "axios";
import { config } from "../../config/config";

const axiosClient = axios.create({
    baseURL: config.BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    // console.log(config);

    // config.headers["Content-Type"] = "application/json";
    // config.headers.setAccept = "application/json";
    // config.headers["Access-Control-Allow-Origin"] = `*`;
    // config.headers[
    //     "Access-Control-Allow-Methods"
    // ] = `GET, POST, PATCH, PUT, DELETE, OPTIONS`;
    // config.headers[
    //     "Access-Control-Allow-Headers"
    // ] = `Origin, Content-Type, X-Auth-Token`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status == 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }

        throw error;
    }
);
export default axiosClient;
