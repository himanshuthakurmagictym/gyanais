import Brudcrums from "../../components/Fontend/Brudcrums"
import SubmenuDashboard from "../../components/Teacher/SubmenuDashboard"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {useRouter } from "next/router"

function mySchedule() {
  return (
    <>
    <Brudcrums/>
    <ToastContainer />
        <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
            <div className="container">   
                <div className="row justify-content-center pt-2"> 
                    <div className="card col-12 col-md-12">
        
                         <div className="row"> 
                            <div className="col-md-3">
                                <SubmenuDashboard />
                                
                            </div>

                            <div className=" col-md-9">
                                <div className="card-box">
                                <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">My Schedule</h2>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col"> S No.</th>
      <th scope="col">Video Name</th>
      <th scope="col">course Name</th>
      <th scope="col">Time</th>
      <th scope="col">Button for reschedule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
                                    
                                                    </div>
                                                
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

export default mySchedule