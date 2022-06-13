import express from 'express';
import { createPageRenderer } from 'vite-plugin-ssr';
import * as vite from 'vite';
import { api } from '../utils/api';
import { emptyUser } from '../store/auth';
import cookieParser from 'cookie-parser';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${ __dirname }/..`;

startServer();

async function startServer() {
    const app = express();
    app.use(cookieParser());

    let viteDevServer;
    if (isProduction) {
        app.use(express.static(`${ root }/dist/client`));
    } else {
        viteDevServer = await vite.createServer({
            root,
            server: {middlewareMode: 'ssr'},
        });
        app.use(viteDevServer.middlewares);
    }

    const renderPage = createPageRenderer({viteDevServer, isProduction, root});

    app.get('*', async (req, res, next) => {
        const url = req.originalUrl;
        const user = await api.get('/user', {
            headers: {'Cookie': req.headers.cookie || ''},
            withCredentials: true,
            timeout: 2000
        }).then(r => r.data).catch(e => {
            console.error(e);
            return emptyUser;
        });
        const pageContextInit = {
            url,
            user
        };
        const pageContext = await renderPage(pageContextInit);
        const {httpResponse} = pageContext;
        if (!httpResponse) return next();
        const stream = await httpResponse.getNodeStream();
        const {statusCode, contentType} = httpResponse;
        res.status(statusCode).type(contentType);
        stream.pipe(res);
    });

    const port = process.env.PORT || 3000;
    const host = '0.0.0.0';
    // @ts-ignore
    app.listen(port, host);
    console.log(`Server running at http://${ host }:${ port }`);
}
