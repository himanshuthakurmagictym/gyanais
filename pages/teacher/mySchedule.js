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
import { faEye, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


function MySchedule({allclass, livebutton}) {
  const [duration, setduration]= useState("");
  const [mytime, setmytime]= useState("");
  const [videoid, setvideo]= useState("");

      const notify = (data)=>{
        //console.log(data);
    if(data.status_code === 200){
        toast.success(data.message,{autoClose:2000});
    }else{
        toast.error(data.message,{autoClose:2000});
    }
    }

    const errorhandler = (x)=>{
      toast.error(`Please Fill ${x}.`,{autoClose:8000})
      return false
    }

  const reschedule = async(e)=>{
    e.preventDefault();

    if(!duration || !mytime){
     
      !duration?errorhandler("duration"):"";
      !mytime?errorhandler("Schedule time"):"";
          
      }else{
        await fetch(APIs.base_url+'teacher/updateschedule', {
          method:"POST",
          headers: {
              "Content-Type": "application/json",
            },
          body:JSON.stringify({duration,mytime,videoid}),
         }).then(res=>res.json()).then(res=>notify(res)).catch(err=>notify(err));
      
      }

  }

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
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col"> SNo.</th>
                          <th scope="col">Class Name</th>
                          <th scope="col">course Name</th>
                          <th scope="col">Time</th>
                          <th scope="col">Reschedule</th>
                          <th scope="col">Live Class</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                         
                            {allclass?.map((all_class, i) => (
                              <>
                               <tr>
                              <th scope="row">{++i}</th>
                              <td>{all_class.video_title}</td>
                              <td>{all_class.course_id.course_name}</td>
                              <td>{moment(all_class.videoDate).format('MMMM Do, hh:mm A')}</td>
                                <td>
                                 
                                  <button className="btn btn-success " data-toggle="modal" data-target="#exampleModal" onClick={()=>{setvideo(all_class._id)}}>
                                      <FontAwesomeIcon icon={faCalendarAlt} /> 
                                  </button>
                                  
                                  </td>
                                  <td>
                                    {livebutton == 0?
                                  <Link href={`/teacher/coursevideo/${all_class._id}`}>
                                  <button className="btn btn-success " title="Class will be edit before one hour">
                                        <FontAwesomeIcon icon={faEye} />
                                  </button>
                                  </Link>
                                  :
                                  <button disabled className="btn btn-success " title="Class will be edit before one hour">
                                        <FontAwesomeIcon icon={faEye} />
                                  </button>  
                                  }
                               </td>
                               </tr>
                              </>
                                                      
                            ))}

                       
                        
                      </tbody>
                    </table>
                                    
                </div>

               
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Reschedule</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={reschedule}>
                      <div className="row input-main">
                                <div className="col-md-6 col-lg-6 input-wrap " >
                                    <input type="datetime-local" className=" field display-7" onChange={(e)=>{setmytime(e.target.value)}} id="firstname-form2-7" />
                                </div>
                                <div className="col-md-6 col-lg-6 input-wrap ">
                                    <input type="number" className=" field display-7" onChange={(e)=>{setduration(e.target.value)}} placeholder="Duration(mints)" id="firstname-form2-7" />
                                </div>                                       
                        </div>

                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 btn-row">
                                <span className="input-group-btn">
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">Scheduled</button>
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
</div>
</div>
</section>
    </>
  )
}

export default MySchedule
export async function getServerSideProps(context){
  const courses = await fetch(APIs.base_url+'teacher/myschedule',{
      method:"POST",
      headers:{
       "Content-Type": "application/json",
      },
      body:JSON.stringify({teacherid:context.req.cookies['cid']})
  });
  const allcourses = await courses.json();
  const classtimeforbutton = moment(allcourses.data.videoDate).subtract(60, 'minutes').format('hh:mm A');
  const livebutton = (classtimeforbutton>moment().format('hh:mm A')>moment(allcourses.data.videoDate).subtract(60, 'minutes').format('hh:mm A') && classtimeforbutton>moment().format('hh:mm A')<moment(allcourses.data.videoDate).subtract(60, 'minutes').format('hh:mm A'))?1:0;
  // console.log(livebutton)
 
    return {
       props:{
           allclass:allcourses.data,
           livebutton: livebutton
       }
     }
 
}