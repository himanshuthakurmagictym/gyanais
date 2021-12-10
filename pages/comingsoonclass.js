import React from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Singleclass from '../components/Fontend/Classes/Singleclass';
import APIs from '../config.js';
function comingsoonclass({coursessoon}) {
    return (
        <>
             <Brudcrums />
             <section className="features11 cid-qKSpeMafIm" id="features11-d">
       
       <div className="container">
       <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">Courses Starting Soon</h2>
       <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
       <div className="row justify-content-center pt-4">
       {coursessoon.map((Soonclasses) => { 
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

export default comingsoonclass
export async function getServerSideProps(context) {

    const result = await fetch(`${APIs.base_url}course/comingsoonclasses`)
    const coursessoon = await result.json() 
    return {
     props: {
        coursessoon : coursessoon.data,
       
      },
    }
  }