import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const getConfig = () => {
    const config = {};
    process.env = {...process.env, ...loadEnv(null, process.cwd())};
    const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
    if(SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
        config.base = '/astro-traversymedia/';
    return config;
}

export default defineConfig(getConfig());
