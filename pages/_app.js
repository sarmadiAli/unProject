import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { CssBaseline } from '@mui/material';
import makeTheme from '../themeConfig';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
  });
  const { theme } = makeTheme();
  return (
    <CacheProvider value={{ ...cacheRtl }}>
       <ThemeProvider theme={theme}>
          <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )

}

export default MyApp
