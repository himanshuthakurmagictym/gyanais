import { useState, useEffect } from 'react'
import cookie from 'js-cookie'
import APIs from '../config';

export async function fetchUser() {
    const [result, setres] = useState([])
    useEffect( async() => {
        var token = cookie.get('token');
    if(token){
        const sendData = JSON.stringify({token:token})
    const ress = await fetch(`${APIs.base_url}auth/verifytoken`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:sendData,
   })
   .then(res =>res.json())
   .then(res => setres(res.data))


    }
    }, [])
    return result;
}