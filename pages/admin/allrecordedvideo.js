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
import {useAppContext} from '../../components/Fontend/Layout'
import moment from 'moment'

function Allrecordedvideo({allrecorded}) {
  const [classapproved, setclassapproved] = useState();
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

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true})});
  },[])
  const approvdproclass = async(status, id)=>{
    setclassapproved(status)
    await fetch(APIs.base_url+'admin/handleproclass', {
      method:"POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({id, status}),
     }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));

  }


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

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Pro Classes for Approval</h2>
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
                                                <td>Status</td>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            {allrecorded?.map((videos, i)=>(
                                            <tr key={videos._id}>
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
                                                <td><button onClick={()=>{approvdproclass(videos.approved ==0?1:0, videos._id)}} className=" btn-success">{videos.approved == 1?"Deactive":"Active"}</button></td>
                                            </tr>
                                            ))}
                                            {!allrecorded?
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

export default Allrecordedvideo

export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allrecorded`)
    const response = await result.json();
    return {
     props: {
        allrecorded: response.data,
       
      },
    }
  }