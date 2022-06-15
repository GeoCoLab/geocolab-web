import { api } from '../../utils/api';
import moment from 'moment';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const post = await fetchBlogPost(pageContext.routeParams.postSlug);
    return {
        pageContext: {
            pageProps: {
                post: post,
            },
            documentProps: {title: post.title},
        },
    };
}

async function fetchBlogPost(slug: string | null) {
    if (slug === 'new') {
        return {
            posted: moment().format('YYYY-MM-DDTHH:mm')
        }
    }
    let response = await api.get(`/blog/${slug}`);
    let post = response.data;
    let postedDate = moment(post.posted);
    let formattedDate = postedDate.format('YYYY-MM-DDTHH:MM');
    post.posted = formattedDate;
    post.author_id = post.author.id;
    delete post.author;
    return post;
}
