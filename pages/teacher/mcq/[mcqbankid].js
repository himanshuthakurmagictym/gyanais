import Brudcrums from "../../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import makeAnimated from 'react-select/animated';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'
const animatedComponents = makeAnimated();
function mcq({mcqbankid, teacherId}) {
    const[question, setQuestion] = useState("");
    const[option_1, setoption_1] = useState("");
    const[option_2, setoption_2] = useState("");
    const[option_3, setoption_3] = useState("");
    const[option_4, setoption_4] = useState("");
    const[option_5, setoption_5] = useState("");
    const[answer, setanswer] = useState("");
    const notify = (data)=>{
        // console.log(data);
      if(data.status_code === 200){
          toast.success(data.message,{autoClose:2000});
      }else{
          toast.error(data.message,{autoClose:2000});
      }
    }

    const errorhandler = (x)=>{
        toast.error(`Please Fill ${x}.`,{autoClose:8000})
        return false
      }

    const addquestion = async(e) =>{
        e.preventDefault();
        if(!mcqbankid || !question || !option_1 || !option_2 || !option_3 || !option_4  || !option_5 ){
            !mcqbankid?errorhandler("Bank Name"):"";
            !question?errorhandler("question"):"";
            !option_1?errorhandler("option 1"):"";
            !option_2?errorhandler("option 2"):"";
            !option_3?errorhandler("option 3"):"";
            !option_4?errorhandler("option 4"):"";
            !option_5?errorhandler("option 5"):"";
           
            }else{
                await fetch(APIs.base_url+'teacher/addquestion', {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({mcqbankid, question, option_1, option_2, option_3, option_4, option_5, teacherId, answer}),
                   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));

            }

    }

  return (
  <>
   <Brudcrums/>
        <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
            <div className="container">   
                <div className="row justify-content-center pt-2"> 
                    <div className="card col-12 col-md-12">
        <ToastContainer />
                         <div className="row"> 
                            <div className="col-md-3">
                                <SubmenuDashboard />
                            </div>

                            <div className=" col-md-9">
                                <div className="card-box">
                               
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add MCQ Question</h2>
                   
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addquestion} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" placeholder="Enter question "  value={question} onChange={(e)=>{setQuestion(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7"  placeholder="Enter option 1"  value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrap" data-for="firstname">
                                <input type="radio" name="d"className="" value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} />
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 2"  value={option_2} onChange={(e)=>{setoption_2(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrap" data-for="firstname">
                                <input type="radio" name="d" className="" value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} />
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 3"  value={option_3} onChange={(e)=>{setoption_3(e.target.value)}} required="" id="firstname-form2-7"/>
                            
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrap" data-for="firstname">
                                <input type="radio" name="d" className="" value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} />
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 4"  value={option_4} onChange={(e)=>{setoption_4(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrap" data-for="firstname">
                                <input type="radio" name="d" className="" value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} />
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 5"  value={option_5} onChange={(e)=>{setoption_5(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrap" data-for="firstname">
                                <input type="radio" name="d" className="" value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} />
                            </div>
                            
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 btn-row">
                                <span className="input-group-btn">
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">Submit</button>
                                </span>
                            </div>
                        </div>



                        </form>

                        </div>  
</div> 
                    

</div>

 </div>

            
            
           
                     </div>

                     </div>
                     </div>
                </div>
            </div>
</section>
  </>
  )
}

export default mcq;
export const getServerSideProps = async(context)=>{
    const {params} = context;
    const {mcqbankid} = params;

        return{
            props:{
                mcqbankid:mcqbankid,
                teacherId:context.req.cookies['cid']
            }
        }
}