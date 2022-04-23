import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
function addpluscourse() {
    const [courseName, setcourseName] = useState("");
    const [courseDescription, setcourseDescription]= useState("");
    const [writtencontent, setwrittencontent]= useState("");
    const [goal, setgoal]= useState("");
    const [topics, settopics]= useState("");
    const [coursetype, setcoursetype]= useState("");
    const [targetexams, settargetexams]= useState("");
    const [image, setimage]= useState("");
    const [language, setlanguage]= useState("");
    const addcourse = ()=>{
        
    }

  return (
    <>
    <Brudcrums/>
        <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
            <div className="container">   
                <div className="row justify-content-center pt-2"> 
                    <div className="card col-12 col-md-12">
        
                         <div className="row"> 
                            <div className="col-md-3">
                                <SubmenuDashboard />
                            </div>

                            <div className=" col-md-9">
                                <div className="card-box">
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Course</h2>
                    <ToastContainer />
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addcourse} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Course Name"  value={courseName} onChange={(e)=>{setcourseName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="message">
                                <textarea type="text" className="form-control display-7" name="address" rows="2" data-form-field="Message" value={courseDescription} onChange={(e)=>{setcourseDescription(e.target.value)}} placeholder="Enter Course Description" id="message-form2-7"></textarea>
                            </div>
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Spoken Language"  value={language} onChange={(e)=>{setlanguage(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Written Content"  value={writtencontent} onChange={(e)=>{setwrittencontent(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Select A Goal "  value={goal} onChange={(e)=>{setgoal(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Topics "  value={topics} onChange={(e)=>{settopics(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Coursetype "  value={coursetype} onChange={(e)=>{setcoursetype(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter targetexams "  value={targetexams} onChange={(e)=>{settargetexams(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                        
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                
                                <input type="file" className="field display-7" name="image" placeholder="First Name" data-form-field="First Name" accept="image/*"  onChange={(e)=>{setimage(e.target.files[0])}} required="" id="firstname-form2-7"/>
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

export default addpluscourse