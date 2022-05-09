import React, { useState, useEffect, useCallback } from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import SubmenuDashboard from "../../components/Fontend/Leftmenu"
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
import {useAppContext} from '../../components/Fontend/Layout'
var CryptoJS = require("crypto-js");
function dashboard() {
  return (
    <>
     <Brudcrums />

    <section className="testimonials2 " id="testimonials2-e ">
    <ToastContainer />
    <div className="container-fluid">   
       <div className="row  "> 
        <div className="col-md-3">
                      <SubmenuDashboard />
        </div>

        <div className="col-md-9 pt-2">
                        <div className="card-box">
                        <div className="container ">
              <div className="row main-row">
                  <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                      <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">My Course</h2>
                      <div className="card-box">
                      {/* {allcourses?.map((all_class) => (
                                  <Singleclass singleclass={all_class} key="{allcourses[0]._id}" />
                      ))} */}
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

export default dashboard