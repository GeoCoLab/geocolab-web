import partRegex from 'part-regex';
import { PageContextWrapper } from '../../types';
import {api} from '../../utils/api';

export const iKnowThePerformanceRisksOfAsyncRouteFunctions = true

export default async (pageContext: PageContextWrapper) => {
    const {url} = pageContext;
    const editPost = partRegex`/blog/edit/${ /[a-z0-9-]+/ }`.test(url);
    const newPost = url === '/blog/new';
    if ((!editPost) && (!newPost)) {
        return false;
    }

    if (!pageContext.pageContext.user) {
        pageContext.pageContext.user = await api.get('/user').then(r => r.data);
    }
    if (pageContext.pageContext.user.role !== 'admin') {
        return false;
    }

    const postSlug = newPost ? 'new' : url.split('/')[3];

    return {
        routeParams: {
            postSlug,
        }
    };
}
