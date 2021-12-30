import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import Image from 'next/image'

function Profile({datas}) {

   

    return (
        <div>
            <Brudcrums/>
            <section>
              <div className="container">
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">   
    <div className="row justify-content-center pt-2"> 
        <div className="card col-12 col-md-12">
        <div className="card-box">
        <div className="row"> 
        
                        <div className="col-md-4">
                       
                                 <Image src={`/assets/images/`}  width='200' height='200' alt="currentaffair"/>
                        </div>
                    

                        <div className=" col-md-8">
                        
                                <h3 className="mbr-fonts-style mb-3 align-left display-2">{datas.firstname} {datas.lastname}</h3>
                                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                {datas.username}
                                </p>

                                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                {datas.email} 39K Watch mins
                                </p>
                                <div className="underline align-left">
                                <div className="line"></div>
                        
                       
                        </div>
                        </div>
                </div>
            </div>
           
        </div>



    </div>
</div>
</section>
             
           
              </div>
           </section>
        </div>
    )
}

export default Profile

export async function getServerSideProps(ctx){
    const cookie = await parseCookies(ctx);
  
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

