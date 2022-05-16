import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from '../../components/Fontend/Brudcrums'
import PersonalInformationEdit from '../../components/Student/PersonalInformationEdit'
import Avatar from '../../components/Student/Avatar'
import ChangePassword from '../../components/Student/ChangePassword'
import Subscription from '../../components/Student/Subscription'
import ManageNotification from '../../components/Student/ManageNotification'
import {useRouter } from "next/router"

function Setting({userid}) {
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
                                    <a href="/student/setting?tabs=1"><li>Personal information</li></a>
                                    <a href="/student/setting?tabs=2"><li>Change Avatar</li></a>
                                    <a href="/student/setting?tabs=3"><li>Change Password</li></a>
                                    <a href="/student/notification"><li>Notification</li></a>
                                    <a href="/student/profile"><li>Subscription</li> </a> 
                                </ul>

                                </div>     
                        </div>
                        </div>
                    

                        <div className=" col-md-9">
                        <div className="card-box">
                                <div className={tabbar ==1? "activetab" : "deactivetab"}><PersonalInformationEdit /></div>
                               <div className={tabbar == 2? "activetab" : "deactivetab"}><Avatar  /></div>
                               <div className={tabbar == 3? "activetab" : "deactivetab"}><ChangePassword userid={userid} /></div>
                               <div className={tabbar == 4? "activetab" : "deactivetab"}><Subscription /></div>
                               <div className={tabbar == 5? "activetab" : "deactivetab"}><ManageNotification /></div>
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

export default Setting
export async function getServerSideProps(ctx){
 
    return { props: {
        userid:context.req.cookies['cid']
    }}
    

  
}