import {defineConfig} from 'vite'
import React from '@vitejs/plugin-react';
import TsConfigPaths from 'vite-tsconfig-paths';
import {resolve} from "path";

export default defineConfig({
    plugins: [
        React(),
        TsConfigPaths(),
    ],
    // In order to import from our frontend files using relative imports,
    // we need to alias any top level folders
    // https://vite-ruby.netlify.app/config/index.html#watchadditionalpaths
    resolve: {
        alias: {
            components: resolve(__dirname, 'app/frontend/components'),
            layouts: resolve(__dirname, 'app/frontend/layouts'),
            pages: resolve(__dirname, 'app/frontend/pages'),
            images: resolve(__dirname, 'app/frontend/images'),
            types: resolve(__dirname, 'app/frontend/types'),
            services: resolve(__dirname, 'app/frontend/services'),
            tests: resolve(__dirname, 'app/frontend/tests'),
            styles: resolve(__dirname, 'app/frontend/styles'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Bootstrap causes deprecation warnings with sass new "import" system, apparently this will be
                // solved in Bootstrap v6, but for now, disable, because annoying
                quietDeps: true,
                api: 'modern-compiler'
            }
        }
    }
})