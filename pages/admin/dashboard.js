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

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable()});
  },[])
  return (
    <>
     <Brudcrums />

    <section className="testimonials2 cid-qKSii1CMsD adminbackground " id="testimonials2-e">
    <ToastContainer />
    <div className="container-fluid">   
       <div className="row  "> 
        <div className="col-md-2">
          <SubmenuDashboard />
        </div>

        <div className="col-md-10">
                      
        <div className="card-box">
                                <div className="container pt-4">
                                <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            
                                            <h5 class="font-size-16 text-uppercase text-white-50">Totl Registration</h5>
                                            <h4 class="fw-medium font-size-24">1,685 <i
                                                    class="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div class="mini-stat-label bg-success">
                                                <p class="mb-0">+ 12%</p>
                                            </div>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-end">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p class="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                           
                                            <h5 class="font-size-16 text-uppercase text-white-50">Revenue</h5>
                                            <h4 class="fw-medium font-size-24">52,368 <i
                                                    class="mdi mdi-arrow-down text-danger ms-2"></i></h4>
                                            <div class="mini-stat-label bg-danger">
                                                <p class="mb-0">- 28%</p>
                                            </div>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-end">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p class="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            
                                            <h5 class="font-size-16 text-uppercase text-white-50">Total Streaming</h5>
                                            <h4 class="fw-medium font-size-24">15.8 <i
                                                    class="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div class="mini-stat-label bg-info">
                                                <p class="mb-0"> 00%</p>
                                            </div>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-end">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p class="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            
                                            <h5 class="font-size-16 text-uppercase text-white-50">Total Student</h5>
                                            <h4 class="fw-medium font-size-24">2436 <i
                                                    class="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div class="mini-stat-label bg-warning">
                                                <p class="mb-0">+ 84%</p>
                                            </div>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-end">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p class="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Latest Transaction</h4>
                                        <div class="table-responsive">
                                            <table class="table table-hover table-centered table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">(#) Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col" colspan="2">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">#14256</th>
                                                        <td>
                                                            <div>
                                                                 Philip Smead
                                                            </div>
                                                        </td>
                                                        <td>15/1/2018</td>
                                                        <td>$94</td>
                                                        <td><span class="badge bg-success">Delivered</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#14257</th>
                                                        <td>
                                                            <div>
                                                                 Brent Shipley
                                                            </div>
                                                        </td>
                                                        <td>16/1/2019</td>
                                                        <td>$112</td>
                                                        <td><span class="badge bg-warning">Pending</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#14258</th>
                                                        <td>
                                                            <div>
                                                                 Robert Sitton
                                                            </div>
                                                        </td>
                                                        <td>17/1/2019</td>
                                                        <td>$116</td>
                                                        <td><span class="badge bg-success">Delivered</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#14259</th>
                                                        <td>
                                                            <div>
                                                                Alberto Jackson
                                                            </div>
                                                        </td>
                                                        <td>18/1/2019</td>
                                                        <td>$109</td>
                                                        <td><span class="badge bg-danger">Cancel</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#14260</th>
                                                        <td>
                                                            <div>
                                                               David Sanchez
                                                            </div>
                                                        </td>
                                                        <td>19/1/2019</td>
                                                        <td>$120</td>
                                                        <td><span class="badge bg-success">Delivered</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#14261</th>
                                                        <td>
                                                            <div>
                                                                 Philip Smead
                                                            </div>
                                                        </td>
                                                        <td>15/1/2018</td>
                                                        <td>$94</td>
                                                        <td><span class="badge bg-warning">Pending</span></td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
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
    
    
   
            



       
    </div>
</section>
</>
  )
}

export default dashboard