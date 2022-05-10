import React, { useState, useEffect, useCallback } from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import SubmenuDashboard from "../../components/Fontend/Leftmenu"
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
import moment from 'moment'
import {useAppContext} from '../../components/Fontend/Layout'


function allvideostream({alllivestreamdetails}) {

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

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Free Classes</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse' }}>

                                        <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Video Name</th>
                                                <th>Course Name</th>
                                                <th>Duration</th>
                                                <th>Date</th>
                                                <th>Category Id</th>
                                                <td>Start Time</td>
                                                <td>Goal</td>
                                                <td>Teacher Name</td>
                                                <td>CreatedAt</td>
                                               
                                            </tr>
                                            </thead>


                                            <tbody>
                                            {alllivestreamdetails?.map((videos, i)=>(
                                            <tr>
                                                <td>{++i}</td>
                                                <td>{videos.video_title}</td>
                                                <td>{videos.course_id.course_name}</td>
                                                <td>{videos.videoDuration} mints</td>
                                                <td>{moment(videos.videoDate).format('DD MMM YY')}</td>
                                                <td>{videos.category_id.course_category_name}</td>
                                                <td>{moment(videos.startTime).format('DD MMM YY h:mm:ss a')}</td>
                                                <td>{videos.goal}</td>
                                                <td>{videos.teacher_id.firstname}</td>
                                                <td>{moment(videos.createdAt).format('DD MMM YY')}</td>
                                               
                                            </tr>
                                            ))}
                                            {!alllivestreamdetails?
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

export default allvideostream
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allivestreams`)
    const response = await result.json();
   
    return {
     props: {
        alllivestreamdetails: response.data,
       
      },
    }
  }