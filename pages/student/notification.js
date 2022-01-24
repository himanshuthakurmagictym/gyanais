import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from '../../components/Fontend/Brudcrums'
import Avatar from '../../components/Student/Avatar'
import APIs from '../../config.js';
import {useRouter } from "next/router"


function Notification({notification}) {
    return (
        <div>
              <Brudcrums/>
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
                    <div className="container">   
                        <div className="row justify-content-center pt-2"> 
                            <div className="card col-12 col-md-12">
                            
                                        <div className="row"> 
                                                 
                                            <div className="col-md-12">
                                            <h2 className="mbr-fonts-style mb-3 align-center display-2">All  Notification</h2>  
                                            <div className="card-box">
                                            {notification.map((noty)=>(
                                                <li>{noty.message}</li>
                                            ))}
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

export default Notification;
export async function getServerSideProps(context){

    const res = await fetch(`${APIs.base_url}notification/${context.req.cookies['cid']}`);
    const datas = await res.json()
    //console.log(datas);
    return {   
        props:{
            notification: datas.data,
        },
      };

}