import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Brudcrums from "../components/Fontend/Brudcrums"
import APIs from '../config.js';
function currentaffairs({allcurrentaffairs}) {
    return (
        <div>
          <Brudcrums/>
           <section>
              <div className="container">
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">
    <h2 className="mbr-fonts-style mb-3 align-center display-2">Current Affairs</h2>
    
    <div className="row justify-content-center pt-2">
    
     
        {allcurrentaffairs.map((currentAffairs) =>(
               
        <div className="card col-12 col-md-10" key="{currentAffairs._id}">
            <Link href={`/currentaffairsDetails/${currentAffairs._id}`} passHref >
            <div className="card-box">
                <div className="card-header">
                    <div className="card-img">                       
                        <Image src={`${APIs.base_url_home}${currentAffairs.currentaffair_image}`} layout='fill' alt="currentaffairs" />
                    </div>
                    <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                   {currentAffairs.currentaffair_title}
                    </h4>
                </div>
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                <p dangerouslySetInnerHTML={{ __html:currentAffairs.currentaffair_summary }} />
    
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
               
            </div>
            </Link>
        </div>

    ))}

    </div>
</div>
</section>
             
           
              </div>
           </section>
        </div>
    )
}

export default currentaffairs

export async function getServerSideProps(context) {
    const res = await fetch(`${APIs.base_url}currentaffair/all`);
    const datas = await res.json();

    return {
        props: {
            allcurrentaffairs: datas.data,
        }
    }

}