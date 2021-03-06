import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import makeAnimated, { Input } from 'react-select/animated';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'

function AllNotes({allnotes}) {
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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Course Notes</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col"> SNo.</th>
                          <th scope="col">Class Name</th>
                          <th scope="col">course Name</th>
                          <th scope="col">CreatedAt</th>
                          <th scope="col">PDF link</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        
                         {allnotes?
                          <>
                            {allnotes?.map((all_class, i) => (
                              <>
                              <tr>
                              <th scope="row">{++i}</th>
                              <td>{all_class.videoid?.video_title}</td>
                              <td>{all_class.courseid?.course_name}</td>
                              <td>{moment(all_class.createdAt).format('MMMM Do, hh:mm A')}</td>
                                <td>
                                {/* {`${APIs.base_url_home}${all_class.coursevideopdf_pathUrl}`} */}
                               
                                  <Link href= {`/teacher/notes/notedetails/${all_class._id}`}><a target="_blank"><button className="btn btn-success " data-toggle="modal" data-target="#exampleModal" >
                                      <FontAwesomeIcon icon={faFilePdf} /> 
                                  </button>
                                  </a>
                                  </Link>
                                  </td>
                                  </tr>
                              </>
                                                      
                            ))}
                            </>
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

export default AllNotes

export async function getServerSideProps(context){
    const courses = await fetch(APIs.base_url+'teacher/allnotes',{
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body:JSON.stringify({teacherid:context.req.cookies['cid']})
    });
    const allcourses = await courses.json();

      return {
         props:{
             allnotes:allcourses.data,
        
         }
       }
   
  }