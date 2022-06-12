import moment from 'moment';
import { StringDict } from '../types';

export function hasExpired(date: string) {
    return moment(date).isAfter(moment.now());
}

export function sortObjectValues(obj: Object) {
    return Object.entries(obj)
        .sort((a, b) => {
            if (a[1] < b[1]) {
                return -1;
            } else if (a[1] > b[1]) {
                return 1;
            }
            return 0;
        }).reduce((result: StringDict, x: Array<string>) => {
            result[x[0]] = x[1];
            return result;
        }, {});
}

export function getCookies() {
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookies.split(';').filter(c => c !== '');
    let cookies: StringDict = {};
    cookieArray.forEach(c => {
        let [cookiename, ...cookievalue] = c.split('=');
        cookies[cookiename] = cookievalue.join('=');
    });
    return cookies;
}
