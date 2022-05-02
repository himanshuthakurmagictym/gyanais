import Brudcrums from "../../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
const animatedComponents = makeAnimated();
function addMCQ({allcategory, mycourseOptions, myvideoOptions, getmyquestionbank}) {
    const [bankName, setbankName] =  useState("");
    const [video, setvideo] = useState("");
    const [videoid, setvideoid] = useState("");
    const [goal, setgoal]= useState("");
    const [categoryid, setcategoryid]= useState("");
    
    const [course, setcourse]= useState("");
    
    const [courseid, setcourseid]= useState("");


    const notify = (data)=>{
        // console.log(data);
      if(data.status_code === 200){
          toast.success(data.message,{autoClose:2000});
      }else{
          toast.error(data.message,{autoClose:2000});
      }
    }

    const videoOptions= [];
    myvideoOptions.forEach((x)=>{
        if(x.course_id == courseid){
     videoOptions.push({value:x.video_title, label:x.video_title, id:x._id})
        } 
    })
    const goalOptions= [];
    allcategory.forEach((x)=>{
       goalOptions.push({value:x.course_category_name, label:x.course_category_name, categoryid:x._id}) 
    })
 
 
       const courseOptions= [];
       mycourseOptions.forEach((x)=>{
         courseOptions.push({value:x.course_name, label:x.course_name, categoryid:x.category_id,courseid:x._id}) 
       })


       const errorhandler = (x)=>{
        toast.error(`Please Fill ${x}.`,{autoClose:8000})
        return false
      }



    const addmcq = async(e)=>{
        e.preventDefault();
        if(!bankName || !video || !goal ){
            !bankName?errorhandler("bankName"):"";
           
            !video?errorhandler("Class"):"";
            !goal?errorhandler("course"):"";
         
                
            }else{
                await fetch(APIs.base_url+'teacher/addnotes', {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({bankName, videoid, categoryid, courseid}),
                   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
            
            }}


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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add MCQ Bank</h2>
                   
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addmcq} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter MCQ Bank Title"  value={bankName} onChange={(e)=>{setbankName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>
                              
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={goalOptions} defaultValue={goal} onChange={(e)=>{setgoal(e.value),setcategoryid(e.categoryid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a goal"/>
                            </div>
                                       
                        </div> 

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={courseOptions} defaultValue={course} onChange={(e)=>{setcourse(e.value),setcourseid(e.courseid), setcategoryid(e.categoryid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Course"/>
                            </div>              
                        </div>
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={videoOptions} defaultValue={video} onChange={(e)=>{setvideo(e.value),setvideoid(e.id)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Class"/>
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

<div className="container"> 
    <div className="row"> 
                <div className="card-box">
                    <div className="container ">
                    <div className="row main-row">
                        <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                            <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All MCQ Bank</h2>
                            <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"> SNo.</th>
                          <th scope="col">Bank Name</th>
                          <th scope="col">course Name</th>
                          <th scope="col">CreatedAt</th>
                          <th scope="col">Add MCQ Question</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                         
                            {getmyquestionbank?.map((all_class, i) => (
                              <>
                              <th scope="row">{++i}</th>
                              <td>{all_class.bank_name}</td>
                              <td>{all_class.courseid.course_name}</td>
                              <td>{moment(all_class.CreatedAt).format('MMMM Do, hh:mm A')}</td>
                                <td>
                                 
                                  <Link href={`${all_class._id}`}><a target="_blank"><button className="btn btn-success " data-toggle="modal" data-target="#exampleModal" >
                                      <FontAwesomeIcon icon={faFilePdf} /> 
                                  </button>
                                  </a>
                                  </Link>
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
            
            
           
                     </div>



                </div>
            </div>
        </section>
    </>
  )
}

export default addMCQ
export async function getServerSideProps(context){
    const alldatass =  await fetch(APIs.base_url+'courseCategory/detailsCategory');
    const allsubcategories =  await fetch(APIs.base_url+'courseCategory/getsubCategory');
    const getmyquestionbank =  await fetch(APIs.base_url+'teacher/mycourse',{
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body:JSON.stringify({teacherid:context.req.cookies['cid']})
    });

    const allcourses = await fetch(APIs.base_url+'teacher/mycourse',{
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body:JSON.stringify({teacherid:context.req.cookies['cid']})
    })

    const allvideo = await fetch(APIs.base_url+'teacher/myvideos',{
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body:JSON.stringify({teacherid:context.req.cookies['cid']})
    })
   
    const allcategory =  await alldatass.json()
    const Getmyquestionbank =  await getmyquestionbank.json()
    const allcourseOptions =  await allcourses.json();
    const allvideoOptions =  await allvideo.json();
    
   
  
    {
        return {
            props: {
                allcategory: allcategory.data,
                teacherid: context.req.cookies['cid'], 
                mycourseOptions:allcourseOptions.data,
                myvideoOptions:allvideoOptions.data,
                getmyquestionbank:Getmyquestionbank.data,
            },

        }
    }
} 