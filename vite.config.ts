import { defineConfig } from 'vite';
import { angular } from './tools/vite/angular';
import { AngularTemplate } from './tools/vite/sfc/treaty';
import { splitVendorChunkPlugin } from 'vite';


export default defineConfig({
    server: {
        port: 5555
    },
    plugins: [
        AngularTemplate(),
        angular(),
        splitVendorChunkPlugin()
    ],

});
