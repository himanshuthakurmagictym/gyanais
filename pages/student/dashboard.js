import Brudcrums from "../../components/Fontend/Brudcrums"
import APIs from '../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'

function dashboard() {
    return (
        <>
        <Brudcrums/>
        <section className="testimonials2 cid-qKSrnk6eVJ cid-qKSrnk6eVJs" id="testimonials2-e">
<div className="container">   
    <div className="row justify-content-center pt-2"> 
        <div className="card col-12 col-md-12">
        
        <div className="row"> 
        
        <div className="col-md-3">
                        <div className="left_navigation">
                                <div className="">
                                <ul>
                                    <a href="/student/course"><li>Course</li></a>
                                    <a href="/student/setting?tabs=2"><li>Notes</li></a>
                                    <a href="/student/setting?tabs=3"><li>Free Live Classes</li></a>
                                    <a href="/student/setting?tabs=4"><li>Syllabus</li></a>
                                    <a href="/student/profile"><li>Subscription</li> </a> 
                                </ul>

                                </div>     
                        </div>
                        </div>
                    

                        <div className=" col-md-9">
                        <div className="card-box">

                                {/* <div className={tabbar ==1? "activetab" : "deactivetab"}><PersonalInformationEdit /></div>
                               <div className={tabbar == 2? "activetab" : "deactivetab"}><Avatar  /></div>
                               <div className={tabbar == 3? "activetab" : "deactivetab"}><ChangePassword  /></div>
                               <div className={tabbar == 4? "activetab" : "deactivetab"}><Subscription /></div>
                               <div className={tabbar == 5? "activetab" : "deactivetab"}><ManageNotification /></div> */}
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

export default dashboard

export async function getServerSideProps(ctx){
   
    return { props: {}}
  
}
