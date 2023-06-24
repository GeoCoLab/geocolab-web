import { api } from '../../../utils/api';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const orgs = await fetchOrgs(pageContext);
    return {
        pageContext: {
            pageProps: {
                orgs: orgs,
            },
            documentProps: {title: 'My Facilities'},
        },
    };
}

async function fetchOrgs(context: PageContextBuiltIn) {
    let response = await api.get('/org/all', {
        // @ts-ignore
        headers: {'Cookie': context.user.cookie || ''}
    });
    return response.data;
}
