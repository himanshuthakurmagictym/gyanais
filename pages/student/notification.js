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

function notification() {
    return (
        <div>
              <Brudcrums/>
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
                    <div className="container">   
                        <div className="row justify-content-center pt-2"> 
                            <div className="card col-12 col-md-12">
                            
                                        <div className="row"> 
                            
                                            <div className="col-md-12">
                                            <div className="card-box">

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

export default notification;
