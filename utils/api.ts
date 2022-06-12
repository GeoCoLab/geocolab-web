import axios from 'axios';
import cookie from 'cookie';

let API_HOST;
try {
    API_HOST = __API_HOST__;
} catch (e) {
    API_HOST = 'http://10.0.12.12';
}

const BASE_URL = API_HOST + '/api';

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    },
    xsrfCookieName: 'csrf_access_token',
    xsrfHeaderName: 'X-CSRF-TOKEN'
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        let originalRequest = error.config;
        if (error.response.data.errors.includes('Token has expired')) {
            try {
                let cookieString = originalRequest.headers['Cookie']
                let cookies = cookie.parse(cookieString)
                let response = await api.post('/refresh', {}, {headers: {'Cookie': cookieString, 'X-CSRF-TOKEN': cookies['csrf_refresh_token']}});
                originalRequest.headers['Cookie'] = response.headers['set-cookie']
                return api(originalRequest);
            } catch (e) {
                // they're just gonna have to log in again
            }
        }
        return Promise.reject(error);
    }
);
