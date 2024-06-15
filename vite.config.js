import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname);

export default defineConfig({
    root,
    plugins: [vue()],
    publicDir: resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(root, "index.html"),
                hint: resolve(root, "hint.html"),
                allclear: resolve(root, "allclear.html"),
                stage1: resolve(root, 'stages/stage1.html'),
                stage2: resolve(root, 'stages/stage2.html'),
                stage3: resolve(root, 'stages/stage3.html'),
                stage4_1: resolve(root, 'stages/stage4_1.html'),
                stage4_2: resolve(root, 'stages/stage4_2.html'),
                stage4_3: resolve(root, 'stages/stage4_3.html'),
                stage5: resolve(root, 'stages/stage5.html'),
                stage6: resolve(root, 'stages/stage6.html'),
                stage7: resolve(root, 'stages/stage7.html'),
                stage8: resolve(root, 'stages/stage8.html'),
                stage9_1: resolve(root, 'stages/stage9_1.html'),
                stage9_2: resolve(root, 'stages/stage9_2.html'),
                stage10: resolve(root, 'stages/stage10.html'),
            },
        },
    },
});
