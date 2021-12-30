
import  { NextResponse  } from 'next/server'
import { parseCookies } from 'nookies'
import { json } from 'stream/consumers';
//var cryptoJS = require("crypto-js");
import * as CryptoJS from 'crypto-js';
import APIs from '../../config.js';

export function middleware(req) {

  const token = JSON.stringify(req.cookies.token);
  if(token){

    var bytesss  =  CryptoJS.AES.decrypt(token,'619619').toString(CryptoJS.enc.Utf8);
    console.log(bytesss);

  //   const sendData = JSON.stringify({token:bytesss})
  //   const res = fetch(`${APIs.base_url}auth/verifytoken`, {
  //       method:"POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //       },
  //       body:sendData,
  //  }).then(res =>  res.json())
  //  .then(res => console.log(res))
  
return NextResponse.next()
  }

  if(!token){
    return NextResponse.redirect('/login');
  }

  //return new Response(bytesss)
  //return NextResponse.next()
}