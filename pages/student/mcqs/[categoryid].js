import React, {useState, useEffect, useContext } from 'react'
import Brudcrums from "../../../components/Fontend/Brudcrums"
import Singleclass from "../../../components/Fontend/Classes/Singleclass"
import Link from 'next/link'
import APIs from '../../../config.js';
import {useAppContext} from '../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

import Sidebar from '../../../components/Fontend/sidebar';
import Mcqs from '../../../components/Fontend/Classes/Mcqs';

function Mcq({allmcqs, categoryid}) {


    return (
        <>
        <Brudcrums />
        
        <section className="features11 cid-qKSpeMafIm  cid-qKSrnk6ess pt-5" id="features11-d">
            <div className="container">
            <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">All MCQS</h2>
            <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
        
            <div className="row justify-content-center pt-4">

                     <div className="col-md-3">
                     <Sidebar categoryid ={categoryid}/>
                        </div>

                        <div className="col-md-9">
                        <div className="card-box">
                            {allmcqs.map((mcqs) => (
                               <Mcqs mcqs={mcqs} key={mcqs._id}/>

                            ))}
                        </div>
                    </div>
                    </div>
           
            </div>
        </section>  
        </>
    )
}

export default Mcq

export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {categoryid } = params;
    const res = await fetch(`${APIs.base_url}student/mcq/categoryid`,{
        headers: {
            "Content-Type": "application/json",
          },
        method:"POST",
        body:JSON.stringify({category_id:categoryid})
    });
    
    const datas = await res.json()
    //console.log(datas)
        const URLS = APIs.base_url+"payment/status";
        const sendData = JSON.stringify({category_id: categoryid, user: context.req.cookies['cid'] })
        const ress = await fetch(URLS, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:sendData,
        });
       
       const paymentconfirm =  await ress.json();
            if(paymentconfirm.status_code !== 200){
                // console.log(paymentconfirm.status_code)
                return {
                    redirect: {
                    permanent: true,
                    destination: `/student/subscription/${categoryid}`,
                  },
                  props:{},
                }

              
            }else{

                return {
                    props: {
                        allmcqs: datas.data || '',
                        categoryid
                    }
                }

            }
     
      


    
    
   

}
