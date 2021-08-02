import checker from 'vite-plugin-checker';
import packageJson from './package.json';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: process.env.NODE_ENV === 'production' ? packageJson.homepage : '/',
  plugins: [
    checker({ typescript: true }),
  ],
  server: {
    open: true,
  },
};

export default config;
