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



function Addaffair({allcurrentaffairs}) {
    const [currentaffair_title, setcurrentaffair_title] = useState("");
  
   
    const [currentaffair_description, setcurrentaffair_description] = useState("");

    const [currentaffair_image, setcurrentaffair_image]= useState("");
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [configs, setconfigs] = useState({
      readonly: false, 
       placeholder: 'Start typing Current Affairs Description...',
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

const addcurrentaffair = async(e)=>{
    e.preventDefault();
    if(!currentaffair_title || !currentaffair_image ||  !currentaffair_description ){
        !currentaffair_title?errorhandler("currentaffair_title"):"";       
        !currentaffair_image?errorhandler("demo Image"):"";
        !currentaffair_description?errorhandler("demo description"):"";
      
        }else{
   const body = new FormData();
   body.append("currentaffair_title", currentaffair_title);    
   body.append("currentaffair_image", currentaffair_image);
   body.append("currentaffair_description", currentaffair_description);
   await fetch(APIs.base_url+'admin/addcurrentaffair', {
    method:"POST",
    body,
   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
}}

const deleteaffair = async(e)=>{
 await fetch(APIs.base_url+'admin/deleteaffair', {
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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Current Affair Details</h2>
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addcurrentaffair} method="POST" >
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7"  placeholder="Enter Title Name"  value={currentaffair_title} onChange={(e)=>{setcurrentaffair_title(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                            <JoditEditor ref={editor} config={configs} value={currentaffair_description} tabIndex={1} onBlur={newContent => setContent(newContent)} onChange={newContent => {setcurrentaffair_description(newContent)}}  />
                            </div>        
                        </div>

                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept="image/*"  onChange={(e)=>{setcurrentaffair_image(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" htmlFor="customFile" >Choose Demo Image Preview </label>
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
                
                <Image src={currentaffair_image?URL.createObjectURL(currentaffair_image):'/assets/images/imageupload.png'} width={200} height={200} alt="image" />
            
                </div>
                            </div>
            
        </div>  
        {/* all category section start */}
        <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Current Affair </h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse', width:'100%', textAlign:"center" }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Title</th>
                                               
                                                <th>Category Image</th>

                                                <td>CreatedAt</td>
                                                <td>Action</td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {allcurrentaffairs?.map((currentaffairs, i)=>(
                                            <tr key={currentaffairs._id}>
                                                <td>{++i}</td>
                                                <td>{currentaffairs.currentaffair_title}</td>
                                              
                                                <td><Image src={`${APIs.base_url_home}${currentaffairs.currentaffair_image.replace(/\\/g,'\/')}`}width={50} height={50}   alt="category "/></td>
                                                <td>{moment(currentaffairs.createdAt).format('DD MMM YYYY')}</td>
                                                <td><button onClick={()=>{deleteaffair(currentaffairs._id)}} className=" btn-success"><FontAwesomeIcon icon={faTrashCan}/></button></td>
                                            </tr>
                                            ))}

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

export default Addaffair

export async function getServerSideProps(context) {
  const res = await fetch(`${APIs.base_url}currentaffair/all`)
    const response = await res.json();
    return {
     props: {
        allcurrentaffairs: response.data,
       
      },
    }
  }