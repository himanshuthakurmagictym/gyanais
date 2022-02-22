import '../styles/globals.css'
import '../styles/coursevideo.css'
import '../styles/live-chat-box.css'
import Layout from '../components/Fontend/Layout';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

    if(router.pathname == "/teacher/coursevideo/[coursevideoid]" ){
      return(
        <Layout>
        <Component {...pageProps} /> 
        </Layout>
        )
      

    }else{
      return(
        <Layout>
        <Component {...pageProps} />
        </Layout>
        )
      
    }
  
}

export default MyApp
