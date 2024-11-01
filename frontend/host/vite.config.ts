import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      remotes: {
        app1: {
          type: 'module',
          name: 'app1',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'app1',
          shareScope: 'default',
        },
      },
      exposes: {},
      filename: 'remoteEntry.js',
      shared: {
        react: {
          // requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
    react()
  ],
})
