import React, { useState, useEffect, useMemo, useRef} from 'react';
import Brudcrums from "../../components/Fontend/Brudcrums";
import Image from 'next/image';
import Link from 'next/link';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import SubmenuDashboard from "../../components/Fontend/Leftmenu";
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie';
import {useRouter} from 'next/router';
import {useAppContext} from '../../components/Fontend/Layout';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

const animatedComponents = makeAnimated();
function Addpaymentplan({allcategories, allsubscription}) {
    const [packageName, setpackageName] = useState("");
    const [packageAmount, setpackageAmount] = useState("");
    const [packageDesc, setpackageDesc] = useState("");
    const [packageDuration, setpackageDuration] = useState("");
    const [packagedetail, setpackagedetail] = useState("");
    const [goal, setgoal]= useState("");
    const [categoryid, setcategoryid]= useState("");

        const placeholder = "fsdfdsf";
    const editor = useRef(null)
	const [content, setContent] = useState('')

    const config = useMemo({
		readonly: false // all options from https://xdsoft.net/jodit/doc/,
		// placeholder: placeholder || 'Start typings...'
	}, [])

    const goalOptions= [];
    allcategories.forEach((x)=>{
         goalOptions.push({value:x.course_category_name, label:x.course_category_name, categoryid:x._id}) 
      })

    const packageNameOptions = [
        { value: 'Plan-A', label: 'Plan-A' },
        { value: 'Plan-B', label: 'Plan-B' },
        { value: 'Plan-C', label: 'Plan-C' },
      ];

      const packageDurationOptions = [
        { value: '30', label: '30 Days' },
        { value: '90', label: '90 Days' },
        { value: '365', label: '365 Days' },
      ];

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

const addpackage = async(e)=>{
    e.preventDefault();

    if(!packageAmount || !packageName || !packageDesc || !packageDuration || !packagedetail || !goal){
        !goal?errorhandler("Select category"):"";       
        !packageName?errorhandler("package name"):"";
        !packageAmount?errorhandler("package amount"):"";
        !packageDesc?errorhandler("package description"):"";
        !packageDuration?errorhandler("package Duration"):"";
        !packagedetail?errorhandler("package Details"):"";       
        }else{
   await fetch(APIs.base_url+'admin/addpackage', {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({packageName, categoryid , packageAmount, packageDesc, packageDuration, packagedetail}),
   }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
}}
const deletepackage = async(e)=>{
  
 await fetch(APIs.base_url+'admin/deletepackage', {
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
           
                <div className="col-sm-12 col-lg-8 col-md-8 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Payment Plan</h2>
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addpackage} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                {/* <input type="text" className="field display-7" name="syllabusName" placeholder="Enter package Name"  value={packageName} onChange={(e)=>{setpackageName(e.target.value)}} required="" id="firstname-form2-7"/> */}

                                <Select options={packageNameOptions} defaultValue={packageName} onChange={(e)=>{setpackageName(e.value)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a package"/>
                            </div>
                                       
                        </div>
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={goalOptions} defaultValue={goal} onChange={(e)=>{setgoal(e.value),setcategoryid(e.categoryid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a goal"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="firstname">
                                <textarea type="text" rows="2" className="form-control display-7" name="syllabusName" placeholder="Enter package Description"  value={packageDesc} onChange={(e)=>{setpackageDesc(e.target.value)}} required="" id="firstname-form2-7"></textarea>

                                <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => {}}  />
                                                                
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="firstname">
                                <textarea type="text" rows="2" className="form-control display-7" name="syllabusName" placeholder="Enter package Details"  value={packagedetail} onChange={(e)=>{setpackagedetail(e.target.value)}} required="" id="firstname-form2-7"></textarea>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-6 col-lg-6 input-wrap" data-for="firstname">
                                <input type="number" className="field display-7" name="syllabusName" placeholder="Enter packageAmount"  value={packageAmount} onChange={(e)=>{setpackageAmount(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-6 col-lg-6 input-wrap" data-for="firstname">
                                {/* <input type="text" className="field display-7" name="syllabusName" placeholder="Enter package Name"  value={packageDuration} onChange={(e)=>{setpackageDuration(e.target.value)}} required="" id="firstname-form2-7"/> */}

                                <Select options={packageDurationOptions} defaultValue={packageDuration} onChange={(e)=>{setpackageDuration(e.value)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Duration"/>
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
                <div className="col-sm-12 col-lg-4 col-md-4 text-center">
                
                {/* <Image src={'/assets/images/imageupload.png'} width={200} height={200} alt="image" /> */}
            
                </div>
                            </div>
            
        </div>  
        {/* all category section start */}
        <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Payment Plan</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse', width:'100%', textAlign:"center" }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Package Name</th>
                                                <td>Amount</td>
                                                <td>Duration</td>
                                                <th>Goal</th>
                                                <td>CreatedAt</td>
                                                <td>Action</td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {allsubscription?.map((subscription, i)=>(
                                            <tr>
                                                <td>{++i}</td>
                                                <td>{subscription.packageName}</td>
                                                <td>{subscription.packageAmount}</td>
                                                <td>{subscription.packageDuration}</td>
                                                <td>{subscription.category_id.course_category_name}</td>
                                               
                                                <td>{moment(subscription.createdAt).format('DD MMM YYYY')}</td>
                                                <td><button onClick={()=>{deletepackage(subscription._id)}} className=" btn-success"><FontAwesomeIcon icon={faTrashCan}/></button></td>
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

export default Addpaymentplan

export async function getServerSideProps(context) {
  const result =  await fetch(APIs.base_url+'courseCategory/detailsCategory');
  const getsubscription =  await fetch(APIs.base_url+'admin/getsubscription');
  const allsubscription = await getsubscription.json();
    const response = await result.json();
    return {
     props: {
        allcategories: response.data,
        allsubscription:allsubscription.data
       
      },
    }
  }