import { api } from '../../../utils/api';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const org = await fetchOrg(pageContext);
    return {
        pageContext: {
            pageProps: {
                org,
            },
            documentProps: {title: org.name},
        },
    };
}

async function fetchOrg(context: PageContextBuiltIn) {
    let orgId = context.routeParams.itemId;
    if (orgId === 'new') {
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
    let response = await api.get(`/org/${ orgId }`, conf);
    return response.data;
}
