import checker from 'vite-plugin-checker';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: process.env.NODE_ENV === 'production' ? '/codebook/' : '/',
  plugins: [
    checker({ typescript: true }),
  ],
  server: {
    open: true,
  },
};

export default config;
