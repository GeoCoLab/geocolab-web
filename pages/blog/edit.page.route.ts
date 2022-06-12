import partRegex from 'part-regex';
import { PageContextWrapper } from '../../types';
import {api} from '../../utils/api';

export const iKnowThePerformanceRisksOfAsyncRouteFunctions = true

export default async (pageContext: PageContextWrapper) => {
    const {url} = pageContext;
    if (!partRegex`/blog/edit/${ /[a-z0-9-]+/ }`.test(url)) {
        return false;
    }

    if (!pageContext.pageContext.user) {
        pageContext.pageContext.user = await api.get('/user').then(r => r.data);
    }
    if (pageContext.pageContext.user.role !== 'admin') {
        return false;
    }

    const postSlug = url.split('/')[3];

    return {
        routeParams: {
            postSlug,
        }
    };
}
