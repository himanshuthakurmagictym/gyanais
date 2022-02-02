
import React, {useEffect, useState} from "react";
import Header from './Header';
import Footer from '../Fontend/Footer';
import cookie from 'js-cookie'
import APIs from '../../config.js';
import { createContext, useContext } from 'react';
import {io} from 'socket.io-client'
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

        const [socket, setSocket] = useState(null);
        useEffect(()=>{
             setSocket(io(APIs.base_url_home));
        //setSocket(1);
           },[])
  

 return(
    <AppContext.Provider value={ress}>
         <Header socket={socket}/>
         {children}
         <Footer /> 
         </AppContext.Provider>
 )
}

export function useAppContext() {
    return useContext(AppContext);
  }


  export function useio() {
    return useContext(socket);
  }
