import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import cookie from 'js-cookie'
import router from 'next/router'
var CryptoJS = require("crypto-js");
import APIs from '../../config.js';

function Header() {
 
  var isuser = cookie.get('token')
  //  if(isuser){
    // var bytesss  = CryptoJS.AES.decrypt(isuser, '619619');
    // const user = JSON.parse(bytesss.toString(CryptoJS.enc.Utf8));
  //  }

  //  let userdetails = false
   
  //   if(isuser){
  //     userdetails = true
  //   }else{
  //      userdetails = false
  //   }


    return (

        <section className="menu cid-qKSs6VLKjY" once="menu" id="menu1-h">

    
    

        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div className="navbar-brand">
    
                <span className="navbar-caption-wrap">        <Link href="/" ><a className="navbar-caption text-black display-2" >
                      <Image src="/assets/images/logo.png" alt="logo"  width="64" height="64" /></a></Link></span>
                       
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
                <li className="nav-item ">
                <a className="nav-link link text-danger  display-4" onClick={()=>{cookie.remove('token');cookie.remove('user'); router.push('/login');}} >Logout</a>
                </li>
                }
                <li className="nav-item ">
                <Link href="/contactus" ><a className="nav-link link text-danger  display-4"  >
                           Contact Us</a></Link>
                </li>
                

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

