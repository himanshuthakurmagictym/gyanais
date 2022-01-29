import Brudcrums from "../../components/Fontend/Brudcrums"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"
function Dashboard() {

    const [tabbar, settabbar] = useState(1)
    const router = useRouter();
    useEffect(() => {
       if(router.query.tabs){
        settabbar(router.query.tabs)
       }
       
    }, [tabbar])

    return (
        <div>
             <Brudcrums/>
             <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">   
    <div className="row justify-content-center pt-2"> 
        <div className="card col-12 col-md-12">
        
        <div className="row"> 
        
                        <div className="col-md-3">
                        <div className="left_navigation">
                                <div className="">
                                <ul>
                                    <a href="/teacher/schedule"><li>My Schedule</li></a>
                                    <a href="/teacher/addpluscourse"><li>Add Plus Course</li></a>
                                    <a href="/teacher/addfreeclass"><li>Add Free Class </li></a>
                                    <a href="/teacher/addpaidclass"><li>Add paid Class</li></a>
                                    <a href="/teacher/addmcq"><li>Upload MCQ</li></a>
                                    <a href="/teacher/addnotes"><li>Upload Notes</li></a>
                                    
                                    {/* <a href="/student/profile"><li>Subscription</li> </a>  */}
                                </ul>

                                </div>     
                        </div>
                        </div>
                    

                        <div className=" col-md-9">
                        <div className="card-box">
                                <div className={tabbar ==1? "activetab" : "deactivetab"}></div>
                               <div className={tabbar == 2? "activetab" : "deactivetab"}></div>
                               <div className={tabbar == 3? "activetab" : "deactivetab"}></div>
                               <div className={tabbar == 4? "activetab" : "deactivetab"}></div>
                               <div className={tabbar == 5? "activetab" : "deactivetab"}></div>
                        </div>
                        </div>
                </div>
            
            
           
        </div>



    </div>
</div>
</section>
        </div>
    )
}

export default Dashboard
