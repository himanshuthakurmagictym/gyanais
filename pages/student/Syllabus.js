import React from 'react'

function Syllabus() {
    return (
        <div>
            
        </div>
    )
}

export default Syllabus
export async function getServerSideProps(ctx){
    const cookie = parseCookies(ctx)

    if(!cookie.token){
        
        return {
            redirect: {
              permanent: false,
              destination: "/login",
            },
            props:{},
          };

    }else{

        var bytesss  = CryptoJS.AES.decrypt(cookie.token, '619619');
        var token = JSON.parse(bytesss.toString(CryptoJS.enc.Utf8));

        const sendData = JSON.stringify({token:token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       });
       const datas =  await res.json();

       return {
        props: {datas: datas.data}
     }

    }
    

  
}