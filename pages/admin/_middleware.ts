
import  { NextResponse  } from 'next/server'
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
export async function middleware(req) {

  const tokend = JSON.stringify(req.cookies.token);
  // const categoryid = req.page.params.categoryid ;
  // console.log(`urlcheck${JSON.stringify(req.nextUrl.pathname)}`)
  const {pathname} = req.nextUrl;
  if (pathname == '/teacher') {
    return NextResponse.redirect('/admin/dashboard')
}

  if(tokend){
    const sendData = JSON.stringify({token:req.cookies.token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       })
        const result = await res.json();
        //console.log(res.data._id);
        if(result.status_code !== 200){
          return NextResponse.rewrite('/admin/login');
          }

            //if equal to teacher and login as teacher
            

          if(result.data.roles === APIs.roles[2]){
          
            // return NextResponse.rewrite('/admin/dashboard');
            }else{
           
              return NextResponse.rewrite('/admin/dashboard');
            }

           
      
      return NextResponse.next()
  }
  else{
  
    return NextResponse?.rewrite('/admin/login/');

  }

}