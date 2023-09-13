import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const plugins = [react(), basicSsl()];

const reslove = {
  alias: [
    {
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    }
  ]
};

const build = {
  outDir: path.resolve(__dirname, '../src/main/resources/templates'),
  emptyOutDir: true
};

const proxy = {
  target: 'http://localhost:8080',
  changeOrigin: true,
  secure: false,
  ws: true
};

const buildConfig = {
  plugins: plugins,
  resolve: reslove,
  build: build,
  server: {
    port: 3000,
    https: true,
    host: true,
    proxy: {
      '/': proxy
    }
  }
};

const serveConfig = {
  plugins: plugins,
  resolve: reslove,
  build: build,
  server: {
    port: 3000,
    https: true,
    host: true,
    proxy: {
      '/api': proxy,
      '/account': proxy
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command == 'serve') {
    return serveConfig;
  } else {
    return buildConfig;
  }
});
