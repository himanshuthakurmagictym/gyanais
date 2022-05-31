import React, { useState, useEffect, useRef, useMemo } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic';
const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});



function Adddemo({allcategories}) {
    const [demoTitle, setdemoTitle] = useState("");
    const [demoLesson, setdemoLesson] = useState("");
    const [demovideo, setdemovideo] = useState("");
    const [demoenroll, setdemoenroll] = useState("");
    const [demodescription, setdemodescription] = useState("");
    const [demoDate, setdemoDate] = useState("");
    const [demoImage, setdemoImage]= useState("");
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [configs, setconfigs] = useState({
      readonly: false, 
       placeholder: 'Start typing Demo Description...',
       fullsize:false,
    });
    
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
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true,  paging: false,
    searching: false,
    destroy: true,})});
  },[])
  const errorhandler = (x)=>{
    toast.error(`Please Fill ${x}.`,{autoClose:8000})
    return false
  }

const addDemodata = async(e)=>{
    e.preventDefault();
    if(!demoTitle || !demoImage || !demoLesson || !demovideo || !demodescription || !demoDate){
        !demoTitle?errorhandler("demoTitle"):"";       
        !demoImage?errorhandler("demo Image"):"";
        !demoLesson?errorhandler("demo Lesson"):"";
        !demodescription?errorhandler("demo description"):"";
        !demoDate?errorhandler("demo Date"):"";
        !demovideo?errorhandler("demovideo"):"";
        }else{
   const body = new FormData();
   body.append("demoTitle", demoTitle);    
   body.append("demoImage", demoImage);
   body.append("demoLesson", demoLesson);
   body.append("demodescription", demodescription);
   body.append("demoDate", demoDate);
  body.append("demovideo", demovideo);
   await fetch(APIs.base_url+'admin/adddemo', {
    method:"POST",
    body,
   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
}}

const deletecategory = async(e)=>{
 await fetch(APIs.base_url+'admin/deletedemo', {
  method:"POST",
  headers: {
      "Content-Type": "application/json",
    },
  body:JSON.stringify({_id:e}),
 }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
}

  return (
    <>
     <Brudcrums />

    <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
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
           
                <div className="col-sm-12 col-lg-6 col-md-6 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Demo Video Details</h2>
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addDemodata} method="POST" >
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7"  placeholder="Enter Title Name"  value={demoTitle} onChange={(e)=>{setdemoTitle(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7"  placeholder="Enter lesson Name"  value={demoLesson} onChange={(e)=>{setdemoLesson(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>        
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                            <JoditEditor ref={editor} config={configs} value={demodescription} tabIndex={1} onBlur={newContent => setContent(newContent)} onChange={newContent => {setdemodescription(newContent)}}  />
                            </div>        
                        </div>

                       

                       

                        {/* <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7"  placeholder="Enter Category Name"  value={demoenroll} onChange={(e)=>{setdemoenroll(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>        
                        </div> */}

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="datetime-local" className="field display-7"  placeholder="Enter Category Name"  value={demoDate} onChange={(e)=>{setdemoDate(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>        
                        </div>

                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept="image/*"  onChange={(e)=>{setdemoImage(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" htmlFor="customFile" >
                                   {demoImage?.name?demoImage?.name:"Choose Demo Image Preview"}</label>
                            </div>
                        </div>
                                   
                      </div>

                      <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                     
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFiles" accept="video/*"  onChange={(e)=>{setdemovideo(e.target.files[0])}} />
                                <label className="custom-file-label" name="video" htmlFor="customFiles" >Upload Demo Video  </label> 
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
                <div className="col-sm-12 col-lg-6 col-md-6 text-center">
                
                <Image src={demoImage?URL.createObjectURL(demoImage):'/assets/images/imageupload.png'} width={200} height={200} alt="image" />
            
                </div>
                            </div>
            
        </div>  
        {/* all category section start */}
        <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Demo Video</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse', width:'100%', textAlign:"center" }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>demo Title</th>
                                                <th>Video Date</th>
                                                <th>Category Image</th>

                                                <th>CreatedAt</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {allcategories?
                                            <>
                                            {allcategories?.map((demo, i)=>(
                                            <tr key={demo._id}>
                                                <td>{++i}</td>
                                                <td>{demo.demoTitle}</td>
                                                <td>{demo.demoDate}</td>
                                                <td><Image src={`${APIs.base_url_home}${demo.demoImage.replace(/\\/g,'\/')}`}width={50} height={50}   alt="category "/></td>
                                                <td>{moment(demo.createdAt).format('DD MMM YYYY')}</td>
                                                <td><button onClick={()=>{deletecategory(demo._id)}} className=" btn-success"><FontAwesomeIcon icon={faTrashCan}/></button></td>
                                            </tr>
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

 {/* all category section end */}

    </div>
   </div>
 </div>
    
    
   
            



       
    </div>
</section>
</>
  )
}

export default Adddemo

export async function getServerSideProps(context) {
  const res = await fetch(`${APIs.base_url}demodetails/all`)
    const response = await res.json();
    return {
     props: {
        allcategories: response.data,
       
      },
    }
  }