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
function allorders({allorders}) {

  useEffect(()=>{
    $(document).ready(function(){$("#datatable")?.DataTable({"scrollX": true})});
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
                                <div className="container ">
                                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">All Orders</h2>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse:'collapse' }}>

                                            <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Category</th>
                                                <th>Amount</th>
                                                <th>Email</th>
                                                <th>Payment By</th>
                                                <th>Duration</th>
                                                <td>Student</td>
                                                <th>Start </th>
                                                <td>End</td>
                                                <td>CreatedAt</td>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            {allorders?.map((order, i)=>(
                                            <tr>
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
</section>
</>
  )
}

export default allorders
export async function getServerSideProps(context) {
    const result = await fetch(`${APIs.base_url}admin/allorders`)
    const response = await result.json();
    return {
     props: {
      allorders: response.data,
       
      },
    }
  }