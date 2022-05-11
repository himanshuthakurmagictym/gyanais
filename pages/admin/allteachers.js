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


function allteacher({teacherdetails}) {
    const [teacherapproved, setteacherapproved] = useState();
    useEffect(()=>{
        $(document).ready(function(){$("#datatable")?.DataTable()});
      },[])

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

      const approvdteacher = async(status, id)=>{
        setteacherapproved(status)
        await fetch(APIs.base_url+'admin/teacherapproval', {
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

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Teachers</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap text-center" style={{borderCollapse:'collapse' }}>

                                            <thead>
                                            <tr>
                                            <th>S No.</th>
                                                <th>firstname</th>
                                                <th>lastname</th>
                                                <th>username</th>
                                                <th>email</th>
                                                <th>city</th>
                                                <td>isVerified(Email)</td>
                                                <td>isActivated</td>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            {teacherdetails?.map((teacher, i)=>(
                                            <tr>
                                                <td>{++i}</td>
                                                <td>{teacher.firstname}</td>
                                                <td>{teacher.lastname}</td>
                                                <td>{teacher.username}</td>
                                                <td>{teacher.email}</td>
                                                <td>{teacher.city}</td>
                                                <td>{teacher.isVerified === 1 ?"Yes": "No"}</td>
                                                <td><button onClick={()=>{approvdteacher(teacher.isActivated ==0?1:0, teacher._id)}} className=" btn-success">{teacher.isActivated == 1?"Deactive":"Active"}</button></td>
                                            </tr>
                                            ))}
                                             {!teacherdetails?
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

export default allteacher
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allteachers`)
    const response = await result.json();
    return {
     props: {
        teacherdetails: response.data,
       
      },
    }
  }