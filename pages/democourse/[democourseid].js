import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Link from 'next/link'
import APIs from '../../config.js';
import Breadcrumbs from 'nextjs-breadcrumbs';
import ReactPlayer from 'react-player';


 
 const course = ({demodetail})=>{
    return(
        <>
            <Brudcrums />
           
            <section> 
              <div className="container">   
              <section className="testimonials2 cid-qKSrnk6eVJ topbrumb" id="testimonials2-e">
              {/* <Breadcrumbs  useDefaultStyle
      transformLabel={(title) => title + '>>'} /> */}
                <div className="container">
                        <div className="row justify-content-center">     
                            <div className="card col-12 col-md-8 text-center">
                            <h4 className="mbr-fonts-style mb-3 align-center display-2"> {demodetail.demoTitle}</h4>
                            <ReactPlayer url={`${APIs.base_url_home}${demodetail.demovideo}`} className='react-player'  controls width='100%' 
          height='100%' 
                            config={ {
                                file: {
                                    attributes: {
                                        controlsList: "nodownload",
                                       
                                    }
                                }
                            } } 
                            />
                            </div>
                            <div className="card col-12 col-md-12">                            
                                <div className="card-boxs">
                                {/* <h2 className="mbr-fonts-style mb-3 align-center display-2">{demodetail.demoTitle}</h2> */}
                                    <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                    {demodetail.demodescription} 
                                    </p>
                                    <div className="underline align-left">
                                        <div className="line"></div>
                                    </div> 
                                    
                                    {/* <div className=" align-left">
                                        <button className="btn btn-success display-4">Enroll</button>
                                        <button className="btn btn-success display-4">Share</button>
                                    </div>             */}
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
    const {democourseid } = params;
    
    const res = await fetch(`${APIs.base_url}demodetails/${democourseid}`);
    const datas = await res.json()
    console.log(datas.data)
    
    return {
        props: {
           demodetail: datas.data,
        }
    }
}