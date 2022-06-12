import { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    //@ts-ignore
    const { next } = pageContext.urlParsed.search;
    pageContext.urlParsed.search = null;
    return {
        pageContext: {
            pageProps: {
                next,
            }
        },
    };
}
