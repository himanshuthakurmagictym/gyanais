import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from '../../components/Fontend/Brudcrums'
import PersonalInformationEdit from '../../components/Student/PersonalInformationEdit'
import Avatar from '../../components/Student/Avatar'
import ChangePassword from '../../components/Student/ChangePassword'
import Subscription from '../../components/Student/Subscription'
import ManageNotification from '../../components/Student/ManageNotification'
import {useRouter } from "next/router"

function setting() {
    const [pi, setpi] = useState("1")
    const [a, seta] = useState("")
    const [cp, setcp] = useState("")
    const [mn, setmn] = useState("")
    const [s, sets] = useState("")

    const router = useRouter();
    console.log(router.route);
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
                                    <a href="/student/setting?tab=1"><li>Personal information</li></a>
                                    <a href="/student/setting?tab=2"><li>Change Avatar</li></a>
                                    <a href="/student/setting?tab=3"><li>Change Password</li></a>
                                    <a href="/student/setting?tab=4"><li>Manage Notification</li></a>
                                    <a href="/student/setting?tab=5"><li>Subscription</li> </a> 
                                </ul>

                                </div>     
                        </div>
                        </div>
                    

                        <div className=" col-md-9">
                        <div className="card-box">
                                <div className={pi ==1? "activetab" : "deactivetab"}><PersonalInformationEdit /></div>
                               <div className={pi ==2? "activetab" : "deactivetab"}><Avatar  /></div>
                               <div className={cp ==3? "activetab" : "deactivetab"}><ChangePassword  /></div>
                               <div className={s ==4? "activetab" : "deactivetab"}><Subscription /></div>
                               <div className={mn ==5? "activetab" : "deactivetab"}><ManageNotification /></div>
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

export default setting
export async function getServerSideProps(ctx){
   // const cookie = parseCookies(ctx)

    return { props: {}}
    

  
}