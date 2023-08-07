import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname);
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    plugins: [vue()],
    build: {
        outDir,
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(root, "index.html"),
                hint: resolve(root, "hint.html"),
                stage1: resolve(root, 'stages/stage1.html'),
            },
        },
    },
});