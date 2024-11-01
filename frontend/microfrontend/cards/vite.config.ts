import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite';

export default defineConfig({
    plugins: [
        federation({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './cards-app': './src/App.tsx',
            },
            remotes: {},
            shared: {
                react: {
                    // requiredVersion: dependencies.react,
                    singleton: true,
                },
                'react-singleton-context': { singleton: true, eager: true },
            },
        }),
        react(),
    ],
})
