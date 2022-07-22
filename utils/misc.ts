import moment from 'moment';
import { PageContextWrapper, StringDict } from '../types';
import partRegex from 'part-regex';
import { api } from './api';
import { PageContextBuiltIn } from 'vite-plugin-ssr';

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

export function newOrEditRoute(rootPath: string, permittedRoles: Array<string>) {
    return async (pageContext: PageContextWrapper) => {
        const {url} = pageContext;
        const editItem = partRegex`${ rootPath }/edit/${ /[a-z0-9-]+/ }`.test(url);
        const newItem = url === `${ rootPath }/new`;
        if ((!editItem) && (!newItem)) {
            return false;
        }

        if (!pageContext.pageContext.user) {
            // if no user already in page context, recheck the API
            pageContext.pageContext.user = await api.get('/user').then(r => r.data);
        }
        if (pageContext.pageContext.user.role && !permittedRoles.includes(pageContext.pageContext.user.role)) {
            return false;
        }

        let urlParts = url.split('/');
        const itemId = urlParts[urlParts.length - 1];

        return {
            routeParams: {
                itemId
            }
        };
    };
}
