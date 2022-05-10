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

function addcategory({allrecorded}) {
    const [syllabusName, setsyllabusName] = useState("");
   
    
    const [categoryid, setcategoryid]= useState("");
    
    const [course, setcourse]= useState("");
    
    const [courseid, setcourseid]= useState("");
    const [pdf, setpdf]= useState("");
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
                                <div className="container mr-4 ml-4">
            <div className="row main-row">
            <div className="col-sm-12 col-lg-3 col-md-3 "></div>
                <div className="col-sm-12 col-lg-6 col-md-6 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Category</h2>
                   
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addSyllabus} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="syllabusName" placeholder="Enter Syllabus Title"  value={syllabusName} onChange={(e)=>{setsyllabusName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                    
                        
                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept=".pdf"  onChange={(e)=>{setpdf(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" for="customFile" >Choose Class pdf Preview </label>
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
                <div className="col-sm-12 col-lg-3 col-md-3 "></div>
                
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

export default addcategory

export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allrecorded`)
    const response = await result.json();
    return {
     props: {
        allrecorded: response.data,
       
      },
    }
  }