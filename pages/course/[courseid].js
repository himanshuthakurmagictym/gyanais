import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Link from 'next/link'
import APIs from '../../config.js';
import Image from 'next/image'

 
 const course = ({coursedetail})=>{
    return(
        <>
            <Brudcrums />
            <section>
              <div className="container">
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">
    <h2 className="mbr-fonts-style mb-3 align-center display-2">{coursedetail.course_name}</h2>
    
    <div className="row justify-content-center pt-2">

                
     
        <div className="card col-12 col-md-10">
        <Image src={`/assets/images/currentaffairs/${coursedetail.course_image}`}  width='600' height='300' alt="currentaffair"/>
        
            <div className="card-box">
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                {coursedetail.course_description} 
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
               
            </div>
           
        </div>



    </div>
</div>
</section>
             
           
              </div>
           </section>
        </>
    )
}

export default course;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const {courseid } = params;
     const res = await fetch(`${APIs.base_url}course/${courseid}`);
    const datas = await res.json()
    console.log(datas);
    return {
        props:{
           coursedetail: datas.data
        }
    }
}