import axios from 'axios';
import cookie from 'cookie';

let API_HOST;
try {
    API_HOST = __API_HOST__;
} catch (e) {
    API_HOST = '';
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
