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
import React, {useState, useEffect, useRef} from 'react'
import {useRouter } from "next/router"
const animatedComponents = makeAnimated();
function Addsyllabus({teacherid, mycourseOptions}) {
    const form = useRef(null);
    const [syllabusName, setsyllabusName] = useState("");
 
    const [categoryid, setcategoryid]= useState("");
    
    const [course, setcourse]= useState("");
    
    const [courseid, setcourseid]= useState("");
    const [pdf, setpdf]= useState("");
  
    
    const notify = (data)=>{
       // console.log(data);
     if(data.status_code === 200){
         toast.success(data.message,{autoClose:2000});
         form.current.reset();
     }else{
         toast.error(data.message,{autoClose:2000});
     }
   }
    

      const courseOptions= [];
      mycourseOptions.forEach((x)=>{
        courseOptions.push({value:x.course_name, label:x.course_name, categoryid:x.category_id,courseid:x._id}) 
      })
      
      const errorhandler = (x)=>{
        toast.error(`Please Fill ${x}.`,{autoClose:8000})
        return false
      }

    const addSyllabus = async(e)=>{
        e.preventDefault();

        if(!syllabusName || !pdf || !course ){
            !syllabusName?errorhandler("className"):"";
           
            !pdf?errorhandler("Class image"):"";
            !course?errorhandler("course"):"";
         
                
            }else{
   
       const body = new FormData();
       body.append("syllabusName", syllabusName);    
       body.append("courseid", courseid);
       body.append("syllabusPreview", pdf);
       body.append("teacherid", teacherid);
       body.append("categoryid", categoryid);


       await fetch(APIs.base_url+'teacher/addsyllabus', {
        method:"POST",
        // headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        body,
       }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
    }}

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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Syllabus</h2>
                   
                   
                    <form className="mbr-form" ref={form} data-form-title="My Mobirise Form" onSubmit={addSyllabus} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="syllabusName" placeholder="Enter Syllabus Title"  value={syllabusName} onChange={(e)=>{setsyllabusName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={courseOptions} defaultValue={course} onChange={(e)=>{setcourse(e.value),setcourseid(e.courseid), setcategoryid(e.categoryid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Course"/>
                            </div>              
                        </div>
                        
                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept=".pdf"  onChange={(e)=>{setpdf(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" htmlFor="customFile" >
                                {pdf?.name?pdf?.name:"Choose Class pdf Image "}</label>
                            </div>
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
                            </div>
                        </div>
            
            
           
                     </div>



                </div>
            </div>
        </section>
    </>
  )
}

export default Addsyllabus;

export async function getServerSideProps(context){
    const alldatass =  await fetch(APIs.base_url+'courseCategory/detailsCategory');
    const allsubcategories =  await fetch(APIs.base_url+'courseCategory/getsubCategory');
    const allcourses = await fetch(APIs.base_url+'teacher/mycourse',{
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body:JSON.stringify({teacherid:context.req.cookies['cid']})
    })
   
    const allcategory =  await alldatass.json()
    const Getallsubcategories =  await allsubcategories.json()
    const allcourseOptions =  await allcourses.json();
   
  
    {
        return {
            props: {
                allcategory: allcategory.data,
                teacherid: context.req.cookies['cid'],
                allsubcategories: Getallsubcategories.data,
                mycourseOptions:allcourseOptions.data,
            },

        }
    }
} 