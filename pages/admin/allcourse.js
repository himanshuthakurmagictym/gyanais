import React, { useState, useEffect, useCallback } from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import SubmenuDashboard from "../../components/Fontend/Leftmenu"
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import moment from 'moment'
import {useRouter} from 'next/router'
import {useAppContext} from '../../components/Fontend/Layout'

var CryptoJS = require("crypto-js");
function Allcourse({coursedetails}) {

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true})});
  },[])
  return (
    <>
     <Brudcrums />

    <section className="testimonials2 cid-qKSii1CMsD adminbackground " id="testimonials2-e">
    <ToastContainer />
    <div className="container-fluid">   
       <div className="row  "> 
        <div className="col-md-2">
          <SubmenuDashboard />
        </div>

        <div className="col-md-10">
                      
        <div className="card-box">
                                <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Courses</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse' }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Course Name</th>
                                                <th>CourseType</th>
                                                <th>Language</th>
                                                <th>Topic</th>
                                                <th>Goal</th>
                                                <td>Teacher</td>
                                                <td>CreatedAt</td>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            {coursedetails?.map((courses, i)=>(
                                            <tr key={courses._id}>
                                                <td>{++i}</td>
                                                <td>{courses.course_name}</td>
                                                <td>{courses.coursetype}</td>
                                                <td>{courses.course_laungauge}</td>
                                                <td>{courses.course_topic}</td>
                                                <td>{courses.course_goal}</td>
                                                <td>{courses.teacher_id?.firstname}</td>
                                                <td>{moment(courses.createdAt).format('DD MMM YY')}</td>
                                            </tr>
                                            ))}
                                            {!coursedetails?
                                            <th scope="row">No Record Found</th>
                                            :""}
                                             
                                            
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

export default Allcourse
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allcourses`)
    const response = await result.json();
    return {
     props: {
        coursedetails: response.data,
       
      },
    }
  }