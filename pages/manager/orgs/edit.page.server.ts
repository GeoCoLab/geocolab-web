import { api } from '../../../utils/api';
import moment from 'moment';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const org = await fetchOrg(pageContext.routeParams.itemId);
    return {
        pageContext: {
            pageProps: {
                org,
            },
            documentProps: {title: org.name},
        },
    };
}

async function fetchOrg(orgId: string | null) {
    if (orgId === 'new') {
        return {
            name: null,
            country: null,
            ror_id: null
        }
    }
    let response = await api.get(`/org/${orgId}`);
    let org = response.data;
    return org;
}
