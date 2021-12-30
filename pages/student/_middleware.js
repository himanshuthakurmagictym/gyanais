
import  { NextResponse  } from 'next/server'
import { parseCookies } from 'nookies'
import APIs from '../../config.js';

export async function middleware(req) {

  const tokend = JSON.stringify(req.cookies.token);

  if(tokend){
    
    //const sendData = token:tokend;
    const sendData = JSON.stringify({token:req.cookies.token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       }).then(res => res.json())
       .then(res => console.log(res))
  
       
  return NextResponse.next()
  }else{
    return NextResponse.redirect('/login');
  }

  

  //return new Response(token)
  //return NextResponse.next()
}