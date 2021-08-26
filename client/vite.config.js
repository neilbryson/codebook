/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: process.env.NODE_ENV === 'production' ? '/codebook/' : '/',
  plugins: [
  ],
  server: {
    open: true,
  },
};

export default config;
