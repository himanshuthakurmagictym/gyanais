
import React, {useEffect, useState} from "react";
import Headeradmin from './Headeradmin';
import Footeradmin from './Footeradmin';
import cookie from 'js-cookie'
import APIs from '../../config.js';
import { createContext, useContext } from 'react';
import {io} from 'socket.io-client'
 const AppContext = createContext();
export default function Layoutadmin({children}) {

    

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
         <Headeradmin />
         {children}
         <Footeradmin /> 
         </AppContext.Provider>
 )
}

export function useAppContext() {
    return useContext(AppContext);
  }


 