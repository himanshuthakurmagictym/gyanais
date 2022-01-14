
import React, {useEffect, useState} from "react";
import Header from './Header';
import Footer from '../Fontend/Footer';
import cookie from 'js-cookie'
import APIs from '../../config.js';
import { createContext, useContext } from 'react';
// import AppContext from '../Fontend/UserContext';
 const AppContext = createContext();
export default function Layout({children}) {

    

    const [ress, setres] = useState("")

        useEffect( async() => {
            var token = cookie.get('token');
        if(token){
            const sendData = JSON.stringify({token:token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       }).then(res =>res.json())
       .then(res => setres(res.data))
        }
        }, [])
        
  
  

 return(
    <AppContext.Provider value={ress}>
         <Header />
         {children}
         <Footer /> 
         </AppContext.Provider>
 )
}

export function useAppContext() {
    return useContext(AppContext);
  }
