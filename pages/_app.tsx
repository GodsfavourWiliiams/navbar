import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      header={pageProps.header}
      footer={pageProps.footer !== false ? <div>Footer</div> : null}
    >
    <Component {...pageProps} />
   </Layout>  ) 
}
