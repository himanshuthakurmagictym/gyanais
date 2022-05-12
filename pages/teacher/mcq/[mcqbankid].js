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
import { faAdd, faArrowRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons'
const animatedComponents = makeAnimated();
function Mcq({mcqbankid, teacherId, myQuestion}) {
    const[question, setQuestion] = useState("");
    const[option_1, setoption_1] = useState("");
    const[option_2, setoption_2] = useState("");
    const[option_3, setoption_3] = useState("");
    const[option_4, setoption_4] = useState("");
    const[option_5, setoption_5] = useState("");
    const[option, setoption] = useState("");
    const[answer, setanswer] = useState("");

    const router = useRouter();

    const notify = (data)=>{
        // console.log(data);
      if(data.status_code === 200){
          toast.success(data.message,{autoClose:2000});
          router.reload();
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
        if(!mcqbankid || !question || !option_1 || !option_2 || !option_3 || !option_4  || !option_5 || !answer ){
            !mcqbankid?errorhandler("Bank Name"):"";
            !question?errorhandler("question"):"";
            !option_1?errorhandler("option A"):"";
            !option_2?errorhandler("option B"):"";
            !option_3?errorhandler("option C"):"";
            !option_4?errorhandler("option D"):"";
            !option_5?errorhandler("option E"):"";
            !answer?errorhandler("please tick the correct answer"):"";
           
            }else{
                await fetch(APIs.base_url+'teacher/addquestion', {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({mcqbankid, question, option_1, option_2, option_3, option_4, option_5, teacherId, answer, option}),
                   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));

            }

    }

    const deletequestion = async(questionid)=>{
        await fetch(APIs.base_url+'teacher/deletequestion', {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({questionid}),
           }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
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
                   
                   
                    <form className="mbr-form"  onSubmit={addquestion} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" placeholder="Enter question "  value={question} onChange={(e)=>{setQuestion(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-1 col-lg-1 input-wrapss" data-for="firstname">
                            
                                <div className="question-option">   <input type="radio" name="option" className="" value={option_1} onChange={(e)=>{setanswer(e.target.value), setoption("option_1")}} /><div className="question-alpha"> A. <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" placeholder="Enter option 1"  value={option_1} onChange={(e)=>{setoption_1(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrapss" data-for="firstname">
                                
                                <div className="question-option"><input type="radio" name="option" className="" value={option_2} onChange={(e)=>{setanswer(e.target.value), setoption("option_2")}} /><div className="question-alpha">B. <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 2"  value={option_2} onChange={(e)=>{setoption_2(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            
                                       
                        </div>

                        <div className="row input-main">
                        <div className="col-md-1 col-lg-1 input-wrapss" data-for="firstname">
                                
                                <div className="question-option"><input type="radio" name="option" className="" value={option_3} onChange={(e)=>{setanswer(e.target.value), setoption("option_3") }} /><div className="question-alpha"> C. <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 3"  value={option_3} onChange={(e)=>{setoption_3(e.target.value)}} required="" id="firstname-form2-7"/>
                            
                            </div>
                            <div className="col-md-1 col-lg-1 input-wrapss" data-for="firstname">
                            
                                <div className="question-option">    <input type="radio" name="option" className="" value={option_4} onChange={(e)=>{setanswer(e.target.value), setoption("option_4")}} /><div className="question-alpha"> D. <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                            </div>
                            
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 4"  value={option_4} onChange={(e)=>{setoption_4(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            
                                       
                        </div>

                        <div className="row input-main">
                        <div className="col-md-1 col-lg-1 input-wrapss" data-for="firstname">
                               
                                <div className="question-option"> <input type="radio" name="option" className="" value={option_5} onChange={(e)=>{setoption(e.target.value), setoption("option_5")}} /><div className="question-alpha"> E. <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                            </div>
                            <div className="col-md-5 col-lg-5 input-wrap" data-for="firstname">
                            <input type="text" className="field display-7"  placeholder="Enter option 5"  value={option_5} onChange={(e)=>{setoption_5(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                           
                            
                                       
                        </div>
                        <label className="redcolor">* Please select any radio button for correct answer.</label>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 btn-row">
                                <span className="input-group-btn">
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">Submit</button>
                                </span>
                            </div>
                        </div>
                        </form>

                        </div></div> </div></div>

 <div className="container"> 
    <div className="row"> 
                <div className="card-box">
                    <div className="container ">
                    <div className="row main-row">
                        <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                            <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Questions</h2>
                            <table className="table">
                      <thead>
                        <tr>
                          <th scope="col"> SNo.</th>
                          <th scope="col">Question</th>
                          <th scope="col">Right Answer</th>
                          <th scope="col">CreatedAt</th>
                          <th scope="col">Delete</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                       
                         
                            {myQuestion?.map((myquestion, i) => (
                              <tr>
                              {(!myQuestion)?
                              <>
                              <th scope="row">No Record Found</th>
                              </>
                                : <>
                                <th scope="row">{++i}</th>
                                <td>{myquestion?.question}</td>
                                <td>{myquestion.answer}</td>
                                <td>{moment(myquestion?.CreatedAt).format('MMMM Do, hh:mm A')}</td>
                                <td>
                                   
                                    <button className="btn btn-success " data-toggle="modal" data-target="#exampleModal" onClick={()=>{deletequestion(myquestion._id)}} >
                                        <FontAwesomeIcon icon={faTrash} /> 
                                    </button>
                                    
                                
                                </td>
                                </>}  
                                </tr>
                                                      
                            ))}

                       
                        
                      </tbody>
                    </table>

                 

                        </div>
                        </div>
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

export default Mcq;
export const getServerSideProps = async(context)=>{
    const {params} = context;
    const {mcqbankid} = params;

    const result = await fetch(APIs.base_url+'teacher/myquestion', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({mcqbankid})
    });
    const myQuestion =  await result.json();
    console.log(myQuestion);

        return{
            props:{
                mcqbankid:mcqbankid,
                teacherId:context.req.cookies['cid'],
                myQuestion:myQuestion.data
            }
        }
}