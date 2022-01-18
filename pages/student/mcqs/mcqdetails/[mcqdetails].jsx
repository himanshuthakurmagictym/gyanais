import React, {useState, useEffect, useContext } from 'react'
import Brudcrums from "../../../../components/Fontend/Brudcrums"
import Singleclass from "../../../../components/Fontend/Classes/Singleclass"
import Link from 'next/link'
import APIs from '../../../../config.js';
import {useAppContext} from '../../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

import Sidebar from '../../../../components/Fontend/sidebar';
import Notes from '../../../../components/Fontend/Classes/notes';

function index({mcq}) {

  const [set, useset] =  useState(1)
  const count =1;
 const handleanswer = (hello)=>{
    console.log(hello)
 }

 const [checkedState, setCheckedState] = useState("");
 const handleform =  ((e) =>{
    e.preventDefault();
    const sendData = JSON.stringify({ email: email, password: password, roles: roles})
    const URLS = APIs.base_url+"authlogin/login";
 })

        return (
            <>
            <Brudcrums />
            
            <section className="features11 cid-qKSpeMafIm  cid-qKSrnk6ess pt-5" id="features11-d">
                <div className="container">
                <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{mcq.bank_name}</h2>
                <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
            
                <div className="row justify-content-center pt-4">
    
                         <div className="col-md-3">
                             <Sidebar categoryid ={mcq.category_id}/>
                        </div>
    
                            <div className="col-md-9">
                            <div className="card-box">
                            <div className='question'>
                            <form onSubmit={handleform}>
                            {mcq.mcq.map((mcqs)=>(
<>                         
                            <strong>Question 1:  {mcqs.question}</strong>

                            <div className=''><input type="radio" checked={checkedState} name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_1)}}/>A. {mcqs.option_1}</div>
                            <div className=''><input type="radio" checked={checkedState} name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_2)}}/>B. {mcqs.option_2}</div>
                            <div className=''><input type="radio" checked={checkedState} name={mcqs._id }onChange={()=>{handleanswer(mcqs.option_3)}}/>C. {mcqs.option_3}</div>
                            <div className=''><input type="radio" checked={checkedState} name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_4)}}/>D. {mcqs.option_4}</div>
                            
</>
                            ))}

                            <div className="row input-main">
                           <div className="col-md-12 col-lg-12 btn-row">
                    
                           
                               <span className="input-group-btn">
                                   <button href="#" type="submit" className="btn btn-form btn-success display-4 w-100">Submit</button>
                               </span>
                              
                               </div>                              
                       </div>
                            </form>
                            
                            </div>
                            </div>
                        </div>
                        </div>
               
                </div>
            </section>  
            </>
        )
   
}

export default index
export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {mcqdetails} = params;
   
    const res = await fetch(`${APIs.base_url}student/mcq/${mcqdetails}`);
    const datas = await res.json()
    
        const URLS = APIs.base_url+"payment/status";
        //console.log(datas.data[0].category_id)
        const sendData = JSON.stringify({category_id: datas.data[0].category_id, user: context.req.cookies['cid'] })
      // console.log(datas.data['category_id'])
        const ress = await fetch(URLS, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:sendData,
        });
       
       const paymentconfirm =  await ress.json();
            if(paymentconfirm.status_code !== 200){
              
                return {
                    redirect: {
                    permanent: true,
                    destination: `/student/subscription/${paymentconfirm.category_id}`,
                  },
                  props:{},
                }

              
            }else{

                return {
                    props: {
                        mcq: datas.data[0],
                    }
                }

            }
     
      


    
    //console.log(datas) 
   

}
