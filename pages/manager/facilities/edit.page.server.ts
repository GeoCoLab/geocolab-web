import { api } from '../../../utils/api';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const facility = await fetchFacility(pageContext);
    const analyses = await fetchAnalyses(pageContext);
    return {
        pageContext: {
            pageProps: {
                facility,
                analyses
            },
            documentProps: {title: facility.name},
        },
    };
}

async function fetchFacility(context: PageContextBuiltIn) {
    let facilityId = context.routeParams.itemId;
    if (facilityId === 'new') {
        return {
            name: null,
            country: null,
            ror_id: null
        };
    }
    let conf = {
        // @ts-ignore
        headers: {'Cookie': context.user.cookie || ''}
    }
    let response = await api.get(`/facility/${ facilityId }`, conf);
    return response.data;
}

async function fetchAnalyses(context: PageContextBuiltIn) {
    let conf = {
        // @ts-ignore
        headers: {'Cookie': context.user.cookie || ''}
    }
    let response = await api.get('/analysis/nested', conf);
    return response.data;
}
