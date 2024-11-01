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
            },
        }),
        react(),
        /*federation({
          name: 'app2',
          manifest: true,
          remotes: {
            esm_remote: {
              type: "module",
              name: "esm_remote",
              entry: "https://[...]/remoteEntry.js",
            },
            var_remote: "var_remote@https://[...]/remoteEntry.js",
          },
          exposes: {
            './button': './src/App',
          },
          shared: {
            react: {
              singleton: true,
            },
            'react/': {
              singleton: true,
            },
          },
        }),*/
    ],
})
