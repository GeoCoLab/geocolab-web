import type { App } from 'vue';
import { inject } from 'vue';
import { PageContext } from '../types';

export { usePageContext };
export { setPageContext };

const key = Symbol();

function usePageContext() {
    return inject(key);
}

function setPageContext(app: App, pageContext: PageContext) {
    app.provide(key, pageContext);
}
