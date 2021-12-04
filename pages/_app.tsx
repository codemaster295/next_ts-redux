import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { wrapper } from "../store/index"
import React from 'react'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <ToastContainer
          style={{ zIndex: 100000 }}
        // limit={1}
      />
    </React.Fragment>
  )
}
export default wrapper.withRedux(MyApp);
