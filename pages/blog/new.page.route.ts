import { PageContextWrapper } from '../../types';
import { api } from '../../utils/api';

export const iKnowThePerformanceRisksOfAsyncRouteFunctions = true;

export default async (pageContext: PageContextWrapper) => {
    const {url} = pageContext;
    if (url !== '/blog/new') {
        return false;
    }

    if (!pageContext.pageContext.user) {
        pageContext.pageContext.user = await api.get('/user').then(r => r.data);
    }
    if (pageContext.pageContext.user.role !== 'admin') {
        return false;
    }

    return {};
}
