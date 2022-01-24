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

function index({mcq, bankstatus}) {
const [allanswer, setanswer] = useState([])
const router = useRouter();
const userids = useAppContext();
const userid = userids._id;
 const handleanswer = (answer, question, mcqsid)=>{
   
    if(answer){
        if(allanswer === null){
            console.log('null');
            setanswer([...allanswer, {
                question,
                answer,
                userid,
                mcqsid
            }]);
      
        } else {
            const arr = [...allanswer];
            const index = arr.findIndex((item)=> item.question == question)
            if (index > -1)
            {
                arr[index] = {question, answer, userid, mcqsid}; //replace item in array 
                setanswer(arr);
            } else {
                setanswer([...allanswer, {
                    question,
                    answer,
                    userid,
                    mcqsid
                  }]);
            }
        }
    }

//  setanswer([...answer, {
//     id,
//     getanswer
//   }]);
}


 const [checkedState, setCheckedState] = useState("");

 const handleform =   (async(e) =>{
    e.preventDefault();
    const sendData = JSON.stringify({ allanswer: allanswer})
    const URLS = APIs.base_url+"student/mcq/answerUpdate";
    //console.log(answer)
    const ress = await fetch(URLS, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:sendData,
    }).then(res => res.json())
    .then(data => {(data.status_code == '200') ? notify(data): notify(data) })


 })


 const notify = (res) => 
 {

    if(res.status_code === 200){
       // console.log(res.message)
       setCheckedState(1)
        toast.success(res.message, { autoClose: 5000 });
        router.reload();
   }else{
     
        toast.error(res.message, { autoClose: 5000 });
        router.reload();
   }
     
 }

        return (
            <>
            <Brudcrums />
            <ToastContainer />
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
                                {bankstatus? <><div className='mbr-fonts-style mbr-section-title align-center statuscolor display-2'><h2>{mcq.bank_name} is Already Submitted</h2></div></>:
                            <div className='question'>
                            <form onSubmit={handleform}>
                            {mcq.mcq.map((mcqs, i)=>(
<>                         
                            <strong>Question {++i}:  {mcqs.question}</strong>

                            <div className=''><input type="radio" required name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_1,mcqs._id, mcqs.mcqsid)}}/>A. {mcqs.option_1}</div>
                            <div className=''><input type="radio"  required name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_2, mcqs._id, mcqs.mcqsid)}}/>B. {mcqs.option_2}</div>
                            <div className=''><input type="radio" required  name={mcqs._id }onChange={()=>{handleanswer(mcqs.option_3, mcqs._id, mcqs.mcqsid)}}/>C. {mcqs.option_3}</div>
                            <div className=''><input type="radio" required name={mcqs._id} onChange={()=>{handleanswer(mcqs.option_4, mcqs._id, mcqs.mcqsid)}}/>D. {mcqs.option_4}</div>
                            <div><strong className='statuscolor'>{checkedState === 1 ? `Correct Answer: ${mcqs.answer}`: "" }</strong>
                           
                            </div>
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

                            }
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


        const bankstatusURLS = APIs.base_url+"student/mcq/bankstatus";
        //console.log(datas.data[0].category_id)
        const bankstatussendData = JSON.stringify({mcqsid: datas.data[0].mcq[0].mcqsid, userid: context.req.cookies['cid'] })
      // console.log(datas.data['category_id'])
        const bankstatusress = await fetch(bankstatusURLS, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:bankstatussendData,
        });
        const bankstatus =  await bankstatusress.json();
       //console.log(bankstatus.data)
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
                        bankstatus: bankstatus.data._id,
                    }
                }

            }
     
      


    
    //console.log(datas) 
   

}
