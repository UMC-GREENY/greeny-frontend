import axios from "axios";
export const ACCESS_TOKEN = 'accessToken';

const request = axios.create({
    baseURL: 'www.greeny.r-e.kr',
    withCredentials: true,
    transformRequest: true,
});

request.interceptors.request.use((config) => {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
});

request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
