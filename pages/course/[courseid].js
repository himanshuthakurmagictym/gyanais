import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Link from 'next/link'
import APIs from '../../config.js';
import Image from 'next/image'
import Breadcrumbs from 'nextjs-breadcrumbs';


 
 const course = ({coursedetail})=>{
    return(
        <>
            <Brudcrums />
            <section> 
              <div className="container">   
              <section className="testimonials2 cid-qKSrnk6eVJ topbrumb" id="testimonials2-e">
              <Breadcrumbs  useDefaultStyle
      transformLabel={(title) => title + '>>'} />
                <div className="container">
                        <div className="row justify-content-center">     
                            <div className="card col-6 col-md-5">
                            <Image src={`/assets/images/currentaffairs/${coursedetail.course_image}`}  width='600' height='300' alt="currentaffair"/>
                            
                            </div>
                            <div className="card col-6 col-md-5">                            
                                <div className="card-boxs">
                                <h2 className="mbr-fonts-style mb-3 align-center display-2">{coursedetail.course_name}</h2>
                                    <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                    {coursedetail.course_description} 
                                    </p>
                                    <div className="underline align-left">
                                        <div className="line"></div>
                                    </div> 
                                    
                                    <div className=" align-left">
                                        <button className="btn btn-success display-4">Enroll</button>
                                        <button className="btn btn-success display-4">Share</button>
                                    </div>            
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center pt-2">     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                <div className="row">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/videoicon.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1>Revolutionary Activities (1906 - 1916) - I</h1>
                                            <p>Lession 22 <tab>Dec 8 </tab> 1h 4m</p>
                                        </div>
                                        <div className="col-md-2">
                                        <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>


                        <div className="row justify-content-center pt-2">     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                <div className="row">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/videoicon.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1>Revolutionary Activities (1906 - 1916) - I</h1>
                                            <p>Lession 22 <tab>Dec 8 </tab> 1h 4m</p>
                                        </div>
                                        <div className="col-md-2">
                                        <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>

                        <div className="row justify-content-center pt-2">     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                <div className="row">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/videoicon.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1>Revolutionary Activities (1906 - 1916) - I</h1>
                                            <p>Lession 22 <tab>Dec 8 </tab> 1h 4m</p>
                                        </div>
                                        <div className="col-md-2">
                                        <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </div>
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
     const res = await fetch(`${APIs.base_url}coursedetails/${courseid}`);
    const datas = await res.json()
    
    return {
        props:{
           coursedetail: datas.data,
        }
    }
}