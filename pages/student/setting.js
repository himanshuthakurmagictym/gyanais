import React from 'react'

function setting() {
    return (
        <div>
            
        </div>
    )
}

export default setting
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

       

        const sendData = JSON.stringify({token:cookie.token})
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