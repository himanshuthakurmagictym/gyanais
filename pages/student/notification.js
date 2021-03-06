import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from '../../components/Fontend/Brudcrums'
import Avatar from '../../components/Student/Avatar'
import APIs from '../../config.js';
import {useRouter } from "next/router"
import {io} from 'socket.io-client'
import moment from 'moment'

function Notification({notification}) {

    useEffect(()=>{
        //  const socket = io(APIs.base_url_home);
        // console.log(socket)
    }, [])

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
                                            {notification?.map((noty, i)=>(
                                                <div className='notify' key={noty._id}>
                                                <Link href={`category/${noty.category_id}`} style={{'cursor':'pointer'}}>
                                                <div className="row">
                                                <div className="col-md-2">
                                                    <Image src={`/assets/images/avatar.png`} width={100} height={100} alt="course image" />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className='notifyBody'>
                                                    <h1 className=" display-5">{noty.message}</h1>
                                                    <p>{moment(noty.videoid?.videoDate).format('DD MMM YYY')}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-1">
                                                <div className='notifyfooter'>
                                                <p>{moment(noty.createdAt).fromNow()}</p>
                                                    </div>
                                                </div>
                                                </div>
                                                </Link>
                                                </div>
                                                
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
    const datas = await res.json();
    return {   
        props:{
            notification: datas.data,
        },
      };

}