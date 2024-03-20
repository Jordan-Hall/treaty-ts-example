import { defineConfig } from 'vite';
import { angular } from './tools/vite/angular';
import { AngularTemplate } from './tools/vite/sfc/treaty';
import { splitVendorChunkPlugin } from 'vite';
import {devServer} from './tools/vite/elysia/dev-server'


export default defineConfig({
    server: {
        port: 5555
    },
    plugins: [
        AngularTemplate(),
        devServer({
            entry: './server.ts',
        }),
        angular(),
        splitVendorChunkPlugin()
    ],

});
