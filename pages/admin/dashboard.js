import React, { useState, useEffect, useCallback } from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import SubmenuDashboard from "../../components/Fontend/Leftmenu"
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import moment from 'moment'
import {useRouter} from 'next/router'
import {useAppContext} from '../../components/Fontend/Layout'

var CryptoJS = require("crypto-js");
function Dashboard({allorders, totalstudent, totalteacher, allivestreams, sum}) {

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true,  paging: false,
    searching: false,
    destroy: true,})});
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
                                <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-primary text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            
                                            <h5 className="font-size-16 text-uppercase text-white-50">Totl Regist. (St))</h5>
                                            <h4 className="fw-medium font-size-24">{totalstudent}<i
                                                    className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-success">
                                                <p className="mb-0">+ 12%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-primary text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                           
                                            <h5 className="font-size-16 text-uppercase text-white-50">Revenue</h5>
                                            <h4 className="fw-medium font-size-24">Rs. {sum} <i
                                                    className="mdi mdi-arrow-down text-danger ms-2"></i></h4>
                                            <div className="mini-stat-label bg-danger">
                                                <p className="mb-0">- 28%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-primary text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            
                                            <h5 className="font-size-16 text-uppercase text-white-50">Total Streaming</h5>
                                            <h4 className="fw-medium font-size-24">{allivestreams}<i
                                                    className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-info">
                                                <p className="mb-0"> 00%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-primary text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            
                                            <h5 className="font-size-16 text-uppercase text-white-50">Total Teacher</h5>
                                            <h4 className="fw-medium font-size-24">{totalteacher} <i
                                                    className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-warning">
                                                <p className="mb-0">+ 84%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">Since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Latest Transaction</h4>
                                        <div className="table-responsive">
                                            <table className="table table-hover table-centered table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                    <th>S No.</th>
                                                <th>Category</th>
                                                <th>Amount</th>
                                                <th>Email</th>
                                                <th>Payment By</th>
                                                <th>Duration</th>
                                                <th>Student</th>
                                                <th>Start </th>
                                                <th>End</th>
                                                <th>CreatedAt</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                            {allorders?.map((order, i)=>(
                                            <tr key={order._id}>
                                                <td>{++i}</td>
                                                <td>{order.category_id?.course_category_name}</td>
                                                <td>Rs.{order.amount}</td>
                                                <td>{order.payeeEmail}</td>
                                                <td>{order.paymentGateway}</td>
                                                <td>{order.duration}Days</td>
                                                <td>{order.user?.firstname}</td>
                                                <td>{moment(order.paymentStartTime).format('DD MMM YY HH:a')}</td>
                                                <td>{moment(order.paymentEndTime).format('DD MMM YY HH:a')}</td>
                                                
                                                
                                                
                                                
                                                <td>{moment(order.createdAt).format('DD MMM YY')}</td>
                                            </tr>
                                            ))}
                                         
                                             
                                            
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

export default Dashboard
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allorders`)
    const response = await result.json();

   
    let sum = 0;
    
    for (let i = 0; i < response.data.length; i++) {
        sum +=  JSON.parse(response.data[i].amount);
       
    }


    const studentresult = await fetch(`${APIs.base_url}admin/allstudents`)
    const studentresponse = await studentresult.json();

    const teacherresult = await fetch(`${APIs.base_url}admin/allteachers`)
    const teacherresponse = await teacherresult.json();

    const allivestreams = await fetch(`${APIs.base_url}admin/allivestreams`)
    const responseallivestreams = await allivestreams.json();


    return {
     props: {
      allorders: response.data.slice(0, 5),
      totalstudent: studentresponse.data.length,
      totalteacher: teacherresponse.data.length,
      allivestreams: responseallivestreams.data.length,
      sum: sum.toFixed(2)
       
      },
    }
  }