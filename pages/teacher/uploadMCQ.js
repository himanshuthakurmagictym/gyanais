import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"

function uploadMCQ() {
    const [bankName, setbankName] =  useState("");
    const [videoid,  setvideoid] = useState("");

    const addmcq = (e)=>{
        e.preventDefault();
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
                                <div className="card-box">
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add MCQ</h2>
                   
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addmcq} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter MCQ Bank Title"  value={bankName} onChange={(e)=>{setbankName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                       

                                
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" >                               
                                <Select options={options} value={options.filter(obj => writtencontent.includes(obj.value))} onChange={(e)=>{setwrittencontent(Array.isArray(e) ? e.map(x => x.value) : [])}} isMulti isSearchable className=" field display-7" placeholder="Written Content/Slide Language"  components={animatedComponents}  id="firstname-form2-7"/>
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
            </div>
        </section>
    </>
  )
}

export default uploadMCQ