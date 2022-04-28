import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function mySchedule({allclass}) {
  return (
    <>
    <Brudcrums/>
    <ToastContainer />
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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">My Schedule</h2>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col"> S No.</th>
      <th scope="col">Video Name</th>
      <th scope="col">course Name</th>
      <th scope="col">Time</th>
      <th scope="col">Button for reschedule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td> */}
    {allclass?.map((all_class, i) => (
      <>
      <th scope="row">{++i}</th>
      <td>{all_class.video_title}</td>
      <td>{all_class.course_id}</td>
      <td>{moment(all_class.videoDate).format('MMMM Do, hh:mm A')}</td>
      <td><div className="btn  btn-success ">
        <FontAwesomeIcon icon={faCalendarAlt} />
      </div>
      <div className="btn  btn-success ">
      <FontAwesomeIcon icon={faEye} />
       </div>
      </td>
      </>
                               
    ))}

    </tr>
    
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
            </section>
    </>
  )
}

export default mySchedule
export async function getServerSideProps(context){
  const courses = await fetch(APIs.base_url+'teacher/myschedule',{
      method:"POST",
      headers:{
       "Content-Type": "application/json",
      },
      body:JSON.stringify({teacherid:context.req.cookies['cid']})
  });
  const allcourses = await courses.json();
  
  
    return {
       props:{
           allclass:allcourses.data,
       }
     }
 
}