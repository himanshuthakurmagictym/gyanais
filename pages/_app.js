import '../styles/globals.css'
import '../styles/coursevideo.css'
import '../styles/live-chat-box.css'
import Layout from '../components/Fontend/Layout';
import Layoutadmin from '../components/Fontend/Layoutadmin';
import { useRouter } from "next/router";
import cookie from 'js-cookie'
function MyApp({ Component, pageProps }) {
  var role = cookie.get('role');

    if(role === 'Admin' ){
     
      return(
        <Layoutadmin>
        <Component {...pageProps} /> 
        </Layoutadmin>
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
