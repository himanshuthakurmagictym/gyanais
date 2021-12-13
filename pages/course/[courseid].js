import React, {useState} from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Link from 'next/link'
import APIs from '../../config.js';
import Image from 'next/image'
import Breadcrumbs from 'nextjs-breadcrumbs';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
  TwitterIcon,
  } from 'next-share';

 
 const Course = ({coursedetail})=>{
        const [sociallinks, setsociallinks] = useState('')
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
                            <div className="card col-12 col-md-5">
                            <Image src={`/assets/images/currentaffairs/${coursedetail.course_image}`}  width='600' height='300' alt="currentaffair"/>
                            
                            </div>
                            <div className="card col-12 col-md-5">                            
                                <div className="card-boxs">
                                <h2 className="mbr-fonts-style mb-3 align-center display-2">{coursedetail.course_name}</h2>
                                    <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                    {coursedetail.course_description} 
                                    </p>
                                    <div className="underline align-left">
                                        <div className="line"></div>
                                    </div> 
                                    
                                    <div className=" align-left">
                                    {coursedetail.course_enroll == 1 ?  <button className="btn btn-success display-4">Enroll</button>
                                    : <button className="btn btn-success display-4">UnEnroll</button>}
                                        <button className="btn btn-success display-4" onClick={e=>{setsociallinks(true)}}>Share</button>

                                        {sociallinks == true ?
                                        <span className='socialsharebutton'>
                                        <FacebookShareButton
                                        url={'https://github.com/next-share'}
                                        quote={'next-share is a social share buttons for your next React apps.'}
                                        hashtag={'#nextshare'}
                                        >
                                        <FacebookIcon size={32} round />
                                        </FacebookShareButton>

                                        <TwitterShareButton
                                        url={'https://github.com/next-share'}
                                        title={'next-share is a social share buttons for your next React apps.'}
                                        >
                                        <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                        </span>
                                        :''}
                                       
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

export default Course;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const {courseid } = params;
     const res = await fetch(`${APIs.base_url}course/coursedetails/${courseid}`);
    const datas = await res.json()
    
    return {
        props:{
           coursedetail: datas.data,
        }
    }
}