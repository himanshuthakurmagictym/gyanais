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
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
const animatedComponents = makeAnimated();
function Addplusclass({allcategory, teacherid, allsubcategories, mycourseOptions}) {

    const [className, setclassName] = useState("");
    const [classDescription, setclassDescription]= useState("");
    const [writtencontent, setwrittencontent]= useState([]);
    const [goal, setgoal]= useState("");
    const [categoryid, setcategoryid]= useState("");
    const [topics, settopics]= useState([]);
    const [duration, setduration]= useState("");
    const [course, setcourse]= useState("");
    const [mytime, setmytime]= useState("");
    const [courseid, setcourseid]= useState("");
    const [image, setimage]= useState("");
    const [language, setlanguage]= useState(null);
    
    const notify = (data)=>{
       // console.log(data);
     if(data.status_code === 200){
         toast.success(data.message,{autoClose:2000});
     }else{
         toast.error(data.message,{autoClose:2000});
     }
   }
    
    const options = [
        { value: 'Hindi', label: 'Hindi' },
        { value: 'English', label: 'English' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' }
      ];

     

      const goalOptions= [];
      allcategory.forEach((x)=>{
         goalOptions.push({value:x.course_category_name, label:x.course_category_name, categoryid:x._id}) 
      })
    //   console.log(goal)
    var topicOptions = [];
    useEffect(()=>{
         allsubcategories.forEach((x)=>{      
            if(x.categoryid == categoryid){
                (topicOptions.push({value:x.subcategory_name, label:x.subcategory_name, subcategoryid:x._id}))
            }
        })
      },[][categoryid])


      const courseOptions= [];
      mycourseOptions.forEach((x)=>{
        courseOptions.push({value:x.course_name, label:x.course_name, categoryid:x._id,courseid:x._id}) 
      })
      
      const errorhandler = (x)=>{
        toast.error(`Please Fill ${x}.`,{autoClose:8000})
        return false
      }

    const addCourse = async(e)=>{
        e.preventDefault();

        if(!className || !classDescription || !writtencontent || !goal || !topics || !language || !image || !duration || !mytime){
            !className?errorhandler("className"):"";
            !classDescription?errorhandler("classDescription"):"";
            !writtencontent?errorhandler("writtencontent"):"";
            !goal?errorhandler("goal"):"";
            !topics?errorhandler("topics"):"";
            !language?errorhandler("language"):"";
            !image?errorhandler("Class image"):"";
            !duration?errorhandler("duration"):"";
            !mytime?errorhandler("Schedule time"):"";
                
            }else{
   
       const body = new FormData();
       body.append("className", className);
       body.append("classDescription", classDescription);
       body.append("writtencontent", writtencontent);
       body.append("goal", goal);
       body.append("topics", topics);
       body.append("courseid", courseid);
       body.append("language", language);
       body.append("classPreview", image);
       body.append("teacherid", teacherid);
       body.append("categoryid", categoryid);

       body.append("duration", duration);
       body.append("mytime", mytime);

       await fetch(APIs.base_url+'teacher/addplusclass', {
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
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 mt-3 input-wrap text-center" >
                                        <h2 className="mbr-section-title mbr-fonts-style pb-3 display-5">Class Image Preview</h2>
                                         <Image src={image?URL.createObjectURL(image):'/assets/images/imageupload.png'} width={200} height={200} alt="avatar"/>
                                
                                    </div>
                                 </div> 
                            </div>

                            <div className=" col-md-9">
                                <div className="card-box">
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Plus Class</h2>
                   
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addCourse} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Class Title"  value={className} onChange={(e)=>{setclassName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="message">
                                <textarea type="text" className="form-control display-7" name="address" rows="2"  value={classDescription} onChange={(e)=>{setclassDescription(e.target.value)}} placeholder="Enter Class Description" id="message-form2-7"></textarea>
                            </div>
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" >
                               
                                {/* <select className="custom-select display-7" value={language} onChange={(e)=>{setlanguage(e.target.value)}} required="" id="firstname-form2-7">
                                <option selected> Select Language </option>
                                    <option >English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="Punjabi">Punjabi</option>
                                    <option value="Tamil" >Tamil</option>
                                    <option value="French">French</option>
                                    <option value="Spanish">Spanish</option>
                                </select> */}
                               
                                <Select   isSearchable className=" field display-7" placeholder="Select Spoken Language" defaultValue={language} onChange={(e)=>{setlanguage(e.value)}} options={options} components={animatedComponents} id="firstname-form2-7"/>
 
                            </div>
                            

                                       
                        </div>
                                
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" >                               
                                <Select options={options} value={options.filter(obj => writtencontent.includes(obj.value))} onChange={(e)=>{setwrittencontent(Array.isArray(e) ? e.map(x => x.value) : [])}} isMulti isSearchable className=" field display-7" placeholder="Written Content/Slide Language"  components={animatedComponents}  id="firstname-form2-7"/>
                            </div>

                            
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={goalOptions} defaultValue={goal} onChange={(e)=>{setgoal(e.value),setcategoryid(e.categoryid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a goal"/>
                            </div>
                                       
                        </div>
                        
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                {/* <input type="text" className="field display-7" name="email" placeholder="Enter Topics "  value={topics} onChange={(e)=>{settopics(e.target.value)}} required="" id="firstname-form2-7"/> */}
                                <Select options={topicOptions} defaultValue={topicOptions?.filter(ob => topics?.includes(ob.value))} isMulti onChange={(e)=>{settopics(Array.isArray(e)? e.map(x=>x.value): [])}}  isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Topics"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={courseOptions} defaultValue={course} onChange={(e)=>{setcourse(e.value),setcourseid(e.courseid)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Course"/>
                            </div>              
                        </div>

                        
                        <div className="row input-main">
                        
                        <div className="col-md-12 col-lg-12 input-wrap " >
                            
                            <div className=" custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept="image/*"  onChange={(e)=>{setimage(e.target.files[0])}} />
                                <label className="custom-file-label" name="image" for="customFile" >Choose Class Image Preview </label>
                            </div>
                        </div>
                                   
                    </div>
                        

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
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">Scheduled for Approval</button>
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

export default Addplusclass;

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