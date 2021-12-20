import '../styles/globals.css'
import '../styles/coursevideo.css'
import '../styles/live-chat-box.css'
import Layout from '../components/Fontend/Layout';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
