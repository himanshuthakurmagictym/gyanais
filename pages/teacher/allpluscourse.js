import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Singleclass from "../../components/Teacher/class/Singleclass"
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
const animatedComponents = makeAnimated();

function allpluscourse({allcourses}) {
  return (
    <>
    <Brudcrums/>
    <ToastContainer />
        <section className="testimonials2 cid-qKSpeMafIm " id="testimonials2-e ">
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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">My Course</h2>
                    <div className="card-box">
                    {allcourses?.map((all_class) => (
                                <Singleclass singleclass={all_class} key="{allcourses[0]._id}" />
                    ))}
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

export default allpluscourse;
export async function getServerSideProps(context){
   const courses = await fetch(APIs.base_url+'teacher/mycourse',{
       method:"POST",
       headers:{
        "Content-Type": "application/json",
       },
       body:JSON.stringify({teacherid:context.req.cookies['cid']})
   });
   const allcourses = await courses.json();
   

     return {
        props:{
            allcourses:allcourses.data,
        }
      }
  
}