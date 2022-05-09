
import  { NextResponse  } from 'next/server'
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import CryptoJS from "crypto-js"
export async function middleware(req) {

  const tokend = JSON.stringify(req.cookies.token);
  // const categoryid = req.page.params.categoryid || null? req.page.params.categoryid:'';
  //console.log(req.page.params)
  const {pathname} = req.nextUrl;
  if(tokend){

    //  var bytesss  = CryptoJS.AES.decrypt(tokend, '619619');
    //     var token = (bytesss.toString(CryptoJS.enc.Utf8));

    const sendData = JSON.stringify({token:req.cookies.token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       })
      //  .then(res => res.json())
      //  .then(res => {})

        const result = await res.json();
        //console.log(res.data._id);
        if(result.status_code !== 200){
          return NextResponse.redirect('/login');
          }

        if(result.data.isVerified === '0'){
          //console.log(result.data.isVerified)
          return NextResponse.redirect('/emailVerification');
          }

        //if equal to student and login as teacher
        if(result.data.roles === APIs.roles[0]){
          
          return NextResponse.redirect('/teacher/profile');
          }
  
          if(result.data.roles === APIs.roles[2]){
            return NextResponse.redirect('/admin/dashboard');
            }
      


  return NextResponse.next()
  }else{
    return NextResponse.redirect('/login');
  }

  

  //return new Response(token)
  //return NextResponse.next()
}