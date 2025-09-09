import {defineConfig, mergeConfig} from 'vite'
import ViteBase from './vite.base.config'
import ViteRails from 'vite-plugin-rails';

const config = mergeConfig(ViteBase, defineConfig({
    plugins: [ViteRails()]
}));

export default config;