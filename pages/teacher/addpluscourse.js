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


function addpluscourse({allcategory}) {
    const [courseName, setcourseName] = useState("");
    const [courseDescription, setcourseDescription]= useState("");
    const [writtencontent, setwrittencontent]= useState([]);
    const [goal, setgoal]= useState("");
    const [topics, settopics]= useState("");
    const [coursetype, setcoursetype]= useState("");
    const [targetexams, settargetexams]= useState("");
    const [image, setimage]= useState("");
    const [language, setlanguage]= useState(null);
    
    const options = [
        { value: 'Hindi', label: 'Hindi' },
        { value: 'English', label: 'English' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' }
      ];

      const goalOptions= [];
      allcategory.forEach((x)=>{
         goalOptions.push({value:x.course_category_name, label:x.course_category_name}) 
      })
      const topicOptions = [
        { value: 'Hindi', label: 'Hindi' },
        { value: 'English', label: 'English' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' }
      ]

      const coursetypeOptions= [
        { value: 'Crash Course', label: 'Crash Course' },
        { value: 'Theorical Course', label: 'Theorical Course' },
        { value: 'Practical course', label: 'Practical course' },
      ]

      const targetexamOptions = [
        { value: 'Hindi', label: 'Hindi' },
        { value: 'English', label: 'English' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' }
      ]
    const addCourse = async(e)=>{
        e.preventDefault();
    //    const handleFormfield = JSON.stringify({
    //     courseName,
    //     courseDescription,
    //     writtencontent,
    //     goal,
    //     topics,
    //     coursetype,
    //     targetexams,
    //     language,
    //     image,
    //    })
       const body = new FormData();
       body.append("courseName", courseName);
       body.append("courseDescription", courseDescription);
       body.append("writtencontent", writtencontent);
       body.append("goal", goal);
       body.append("topics", topics);
       body.append("coursetype", coursetype);
       body.append("targetexams", targetexams);
       body.append("language", language);
       body.append("coursePreview", image);
       console.log(body);

       await fetch(APIs.base_url, {
        method:"POST",
        headers: {
            "Content-Type": "multipart/form-data",
          },
        body,
       }).then(res=>res.json()).then(res=>notify(res)).catch(err=>console.log(err));
    }

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
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Add Course</h2>
                    <ToastContainer />
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={addCourse} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Course Name"  value={courseName} onChange={(e)=>{setcourseName(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="message">
                                <textarea type="text" className="form-control display-7" name="address" rows="2" data-form-field="Message" value={courseDescription} onChange={(e)=>{setcourseDescription(e.target.value)}} placeholder="Enter Course Description" id="message-form2-7"></textarea>
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
                               
                                <Select   isSearchable className=" field display-7" placeholder="Select Language" defaultValue={language} onChange={(e)=>{setlanguage(e.value)}} options={options} components={animatedComponents} id="firstname-form2-7"/>
 
                            </div>
                            

                                       
                        </div>
                                
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" >                               
                                <Select options={options} value={options.filter(obj => writtencontent.includes(obj.value))} onChange={(e)=>{setwrittencontent(Array.isArray(e) ? e.map(x => x.value) : [])}} isMulti isSearchable className=" field display-7" placeholder="Written Content/Slide Language"  components={animatedComponents}  id="firstname-form2-7"/>
                            </div>

                            
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap">
                                <Select options={goalOptions} defaultValue={goal} onChange={(e)=>{setgoal(e.value)}} isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a goal"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                {/* <input type="text" className="field display-7" name="email" placeholder="Enter Topics "  value={topics} onChange={(e)=>{settopics(e.target.value)}} required="" id="firstname-form2-7"/> */}
                                <Select options={topicOptions} value={topicOptions.filter(ob => topics.includes(ob.value))} isMulti onChange={(e)=>{settopics(Array.isArray(e)? e.map(x=>x.value): [])}}  isSearchable className=" field display-7"  id="firstname-form2-7"  components={animatedComponents} placeholder="Select a Topics"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                {/* <input type="text" className="field display-7" name="email" placeholder="Enter Coursetype "  value={coursetype} onChange={(e)=>{setcoursetype(e.target.value)}} required="" id="firstname-form2-7"/> */}
                                <Select options={coursetypeOptions} defaultValue={coursetype} isSearchable className=" field display-7"  id="firstname-form2-7" name="coursetype"  components={animatedComponents} onChange={(e)=>{setcoursetype(e.value)}}  placeholder="Course Type"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                               
                                <Select options={targetexamOptions} value={targetexamOptions.filter(ob => targetexams.includes(ob.value))} isMulti onChange={(e)=>{settargetexams(Array.isArray(e)? e.map(x=>x.value): [])}} isSearchable className=" field display-7"  id="firstname-form2-7" name="coursetype"  components={animatedComponents}  placeholder="Target Exams"/>
                            </div>
                                       
                        </div>

                        <div className="row input-main">
                        
                            <div className="col-md-12 col-lg-12 input-wrap " >
                                
                                <div className=" custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" accept="image/*"  onChange={(e)=>{setimage(e.target.files[0])}} />
                                    <label className="custom-file-label" name="image" for="customFile" >Choose Preview Image</label>
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

export default addpluscourse

export async function getServerSideProps(context){
    const alldatass =  await fetch(APIs.base_url+'courseCategory/detailsCategory')
   
    const allcategory =  await alldatass.json()
    //console.log(allcategory.data)
  
    {
        return {
            props: {
                allcategory: allcategory.data,
            },

        }
    }
} 