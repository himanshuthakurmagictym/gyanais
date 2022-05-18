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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
function Addcategory({allcategories}) {
    const [categoryName, setcategoryName] = useState("");

    const [categoryImage, setcategoryImage]= useState("");
  
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

const addCategory = async(e)=>{
    e.preventDefault();

    if(!categoryName || !categoryImage ){
        !categoryName?errorhandler("categoryName"):"";       
        !categoryImage?errorhandler("category image"):"";

            
        }else{

   const body = new FormData();
   body.append("course_category_name", categoryName);    
   body.append("course_category_image", categoryImage);
   await fetch(APIs.base_url+'admin/addcategory', {
    method:"POST",
    // headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    body,
   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
}}
const deletecategory = async(e)=>{
  // e.preventDefault();

   
 await fetch(APIs.base_url+'admin/deletecategory', {
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
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Category</h2>
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addCategory} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="syllabusName" placeholder="Enter Category Name"  value={categoryName} onChange={(e)=>{setcategoryName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept="image/*"  onChange={(e)=>{setcategoryImage(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" htmlFor="customFile" >Choose Category Image Preview </label>
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
                
                <Image src={categoryImage?URL.createObjectURL(categoryImage):'/assets/images/imageupload.png'} width={200} height={200} alt="image" />
            
                </div>
                            </div>
            
        </div>  
        {/* all category section start */}
        <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Categories</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse', width:'100%', textAlign:"center" }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Category Name</th>
                                                <th>Category Image</th>
                                                <th>CreatedAt</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {allcategories?
                                            <>
                                            {allcategories?.map((category, i)=>(
                                            <tr key={category._id}>
                                                <td>{++i}</td>
                                                <td>{category.course_category_name}</td>
                                                <td><Image src={`${APIs.base_url_home}${category.course_category_image.replace(/\\/g,'\/')}`}width={50} height={50}   alt="category "/></td>
                                                <td>{moment(category.createdAt).format('DD MMM YYYY')}</td>
                                                <td><button onClick={()=>{deletecategory(category._id)}} className=" btn-success"><FontAwesomeIcon icon={faTrashCan}/></button></td>
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

export default Addcategory

export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}courseCategory/detailsCategory`)
    const response = await result.json();
    return {
     props: {
        allcategories: response.data,
       
      },
    }
  }