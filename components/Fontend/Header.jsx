import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
var CryptoJS = require("crypto-js");
import APIs from '../../config.js';
import {useAppContext} from '../Fontend/Layout'
import moment from 'moment'
function Header({socket}) {
  
  // var isuser = cookie.get('token')
   const isuser = useAppContext();
  //  setstate(isusers);
   const [notification, setNotifications] =useState([])
   const router =  useRouter();
   const [newuser, setuserid] = useState("");

   useEffect(()=>{
    setuserid(isuser._id)
    
   },[isuser])

  //  useEffect(()=>{
  //   setuserid(isuser._id)
   
  //  },[router.query])

  useEffect(()=>{
      if(newuser){
      socket?.emit('userid', newuser);
    }
  },[newuser])

  useEffect(()=>{
      socket?.on('notification', (result) => {
        setNotifications(result);
      })
    socket?.on('teachernotification', (result) => {
      setNotifications(result);
    })
},[socket])
  
const handleRead = (notyid) => {
  //  id?setNotifications([]):"";
    const userRole = isuser.roles
  socket.emit('readnotification', notyid, userRole)

};

//console.log(`notification received: ${JSON.stringify(notification)}`)

    return (

        <section className="menu cid-qKSs6VLKjY"  id="menu1-h">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div className="navbar-brand">
    
              <span className="navbar-caption-wrap">       
                 <Link href="/" >
                  <a className="navbar-caption text-black display-2" >
                      <Image src="/assets/images/logo.png" alt="logo"  width="64" height="64" />
                  </a>
                </Link>
              </span>
                       
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item ">
                <Link href="/" ><a className="nav-link link text-danger  display-4"  >
                     Home</a></Link>
                </li>
                <li className="nav-item ">
                <Link href="/aboutus" ><a className="nav-link link text-danger  display-4">
                           About us</a></Link>                           
               </li>
                <li className="nav-item ">
                <Link href="/courses" ><a className="nav-link link text-danger  display-4"  >
                           Courses</a></Link>
                </li>
                <li className="nav-item ">
                <Link href="/currentaffairs" ><a className="nav-link link text-danger  display-4"  >
                     Current Affairs</a></Link>
                </li>
                <li className="nav-item">
                <Link href="/contactus" ><a className="nav-link link text-danger  display-4"  >
                           Contact Us</a></Link>
                </li>
                
               
                {  
                  !isuser?
                <>
                <li className="nav-item ">
                    <Link href="/login" ><a className="nav-link link text-danger  display-4"  >Login</a></Link>
                </li>
                <li className="nav-item ">
                    <Link href="/registration" ><a className="nav-link link text-danger  display-4"  >Registration</a></Link>
                </li>
                </>
                : 
                <>
                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item dropdown ">
              
                
                <a className="nav-link  text-danger dropdown-toggle anotifynav" data-toggle="dropdown-submenu" aria-expanded="true">
                <Image src={`/assets/images/notify.png`}  width='40' height='40' alt="avatar"/>
                {
                  notification.length >0 && <div className='notifycount'>{notification.length}</div>
                  }
                </a>
            
                        <div className="dropdown-menu  notifymodel"  >
                                        <div className="card-box container">
                                            {notification.slice(0, 5).map((noty)=>(
                                                <div className='notify row' key={noty._id} onClick={e=>{handleRead(noty._id)}}>
                                                
                                                {/* <div className="col-md-2">
                                                    <Image src={`/assets/images/avatar.png`} width={100} height={100} alt="course image" />
                                                </div> */}
                                                <div className="col-md-12">
                                                    <div className='notifyBodynav'>
                                                       <strong className=""> {noty?.message}</strong>
                                                    </div>
                                                    <p>{moment(noty.createdAt).fromNow()} </p>
                                                </div>

                                                </div>
                                              ))}
                                            
                                                  {
                                                    (isuser.roles === APIs.roles[1]) ?
                                                    <>
                                                    <a href="/student/notification" className='row'> <button className="btn align-center btn-success display-2 w-100" >
                                                      Read All
                                                    </button></a>
                                                    </>:
                                                    <a href="/teacher/notification"  className='row'> <button className="btn align-center btn-success display-2 w-100" >
                                                    Read All
                                                  </button></a>
                                                  }
                                          </div>

                                          
                            </div>
                            
                            
                            
               
                </li>
                </ul>

                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item dropdown">
                    <a className="nav-link  text-danger dropdown-toggle " data-toggle="dropdown-submenu" aria-expanded="true">
                    <Image src={isuser.photo?`${APIs.base_url_home}${isuser.photo}`:('/assets/images/avatar.png')}  width='40' height='40' alt="avatar"/></a>
                    <div className="dropdown-menu">
                   {
                     (isuser.roles === APIs.roles[1]) ?
                     <>
                      <a className="nav-link dropdown-item display-4" href="/courses">Courses</a>
                      {/* <a className="nav-link dropdown-item display-4" href="/student/dashboard">Dashboard</a> */}
                       <a className="nav-link dropdown-item display-4" href="/student/profile">Profile</a>
                      <a className="nav-link dropdown-item display-4" href="/student/setting">Setting</a>
                     </> : 
                     <>
                      <a className="nav-link dropdown-item display-4" href="/teacher/mySchedule"> Dashboard</a>
                     <a className="nav-link dropdown-item display-4" href="/teacher/profile">Profile</a>
                    <a className="nav-link dropdown-item display-4" href="/teacher/setting">Setting</a>
                   </>

                   }
                      <a className="nav-link dropdown-item  display-4" onClick={()=>{cookie.remove('token'); router.push('/login'); router.reload() }} >Logout</a>
                    </div>
                </li>
                </ul>
    
                </>
                }                               
                    </ul>
                <div className="icons-menu">
                  <div className="soc-item">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <span className="mbr-iconfont socicon-twitter socicon headerlink"></span>
                    </a>
                  </div>
                  <div className="soc-item">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <span className="mbr-iconfont socicon-facebook socicon headerlink"></span>
                    </a>
                  </div>
                  <div className="soc-item">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <span className="mbr-iconfont socicon-instagram socicon headerlink"></span>
                    </a>
                  </div>
                  
                  
                  
                </div>
                
          </div>
        </nav>
    </section>
    )
}



export default Header

