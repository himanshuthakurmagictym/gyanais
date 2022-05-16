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
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import ChangePassword from '../../components/Student/ChangePassword'
function Setting({userid}) {
  return (
    <>
     <Brudcrums />

<section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<ToastContainer />
<div className="container-fluid">   
   <div className="row  "> 
   <div className="col-md-3">
       </div>
    <div className="col-md-6">
    <ChangePassword userid={userid} />
    </div>
    <div className="col-md-3">
       </div>
    </div>
    </div>
    </section>
   
    </>
  )
}

export default Setting
export async function getServerSideProps(context){
return{
    props:{
        userid:context.req.cookies['cid']
    }
}
}
