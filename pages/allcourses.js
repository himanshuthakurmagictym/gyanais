import React from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Singleclass from '../components/Fontend/Classes/Singleclass';
import APIs from '../config.js';


function allcourses({allcourses}) {
    return (
        <>
             <Brudcrums />
           
             <section className="features11 cid-qKSpeMafIm" id="features11-d">
       
       <div className="container">
       <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">All Courses</h2>
       <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
       <div className="row justify-content-center pt-4">
       {allcourses.map((Soonclasses) => { 
               return (
                   
                       <Singleclass singleclass={Soonclasses} key={Soonclasses.id} />  
                   
               )
               })}
       
       </div>
       
       </div>
</section>
        </>
    )
}

export default allcourses
export async function getServerSideProps(context) {

    const result = await fetch(`${APIs.base_url}course/all`)
    const coursessoon = await result.json() 
    return {
     props: {
        allcourses : coursessoon.data,
       
      },
    }
  }