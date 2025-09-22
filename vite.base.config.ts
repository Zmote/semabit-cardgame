import {defineConfig} from 'vite'
import React from '@vitejs/plugin-react';
import TsConfigPaths from 'vite-tsconfig-paths';
import {resolve} from "path";
import ViteConfig from './config/vite.json';

const sourceDir = ViteConfig.all.sourceCodeDir;
const resolveBase = sourceDir.endsWith('/') ? sourceDir : sourceDir + '/'

export function fromBase(path: string) {
    return `${resolveBase}${path}`
}

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
            '@': resolve(__dirname, './app/frontend'),
        },
    },
    css: {
        modules: {
            localsConvention: "dashesOnly"
        },
        preprocessorOptions: {
            scss: {
                quiteDeps: true,
                // Bootstrap causes deprecation warnings with sass new "import" system, apparently this will be
                // solved in Bootstrap v6, but for now, disable, because annoying
                silenceDeprecations: ['legacy-js-api', 'global-builtin', 'import', 'color-functions'],
                api: 'modern-compiler'
            },
        }
    }
})