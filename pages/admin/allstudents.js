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

var CryptoJS = require("crypto-js");
function Allstudents({studentdetails}) {

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true,  paging: false,
    searching: false,
    destroy: true,})});
  },[])

  console.log(studentdetails)
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

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Students</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse' }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>firstname</th>
                                                <th>lastname</th>
                                                <th>username</th>
                                                <th>email</th>
                                                <th>city</th>
                                                <td>isVerified</td>
                                            </tr>
                                            </thead>


                                            <tbody>
                                                
                                                {studentdetails?.map((student, i)=>(
                                            <tr key={student._id}>
                                                <td>{++i}</td>
                                                <td>{student.firstname}</td>
                                                <td>{student.lastname}</td>
                                                <td>{student.username}</td>
                                                <td>{student.email}</td>
                                                <td>{student.city}</td>
                                                <td>{student.isVerified === 1 ?"Yes": "No"}</td>
                                            </tr>
                                            ))}
                                             {!studentdetails?
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

export default Allstudents
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allstudents`)
    const response = await result.json();

    return {
     props: {
        studentdetails: response.data,
       
      },
    }
  }