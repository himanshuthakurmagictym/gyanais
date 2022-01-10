import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from "../../../components/Fontend/Brudcrums"
import APIs from '../../../config.js';
import {useRouter} from 'next/router'
function Subscription() {
    const router = useRouter();
    const {categoryid} = router.query;
    return (
        <div>
             <Brudcrums/>
             <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
             <div className='container'>
             <h2 className="mbr-fonts-style mb-3 align-center display-2">Student Payment Plan for {categoryid}</h2>
                 <div className='row'>
                 <div className='bodycontent col-md-4'>
                        <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                                Plan 1
                        </h4>

                        <p className="mbr-text card-text mbr-fonts-style align-center m-0 display-7" >
                               <p> Basic plan to get you started</p>
                            <ul className=''>
                                <li>India's best educators</li>
                                <li>Interactive live classes</li>
                                <li>Live tests & quizzes</li>
                                <li>Structured courses & PDFs</li>
                            </ul>
                           <button className='btn btn-md btn-info display-4 btn-success'>Get Subscription</button>
                            </p>
                  </div>
                  <div className='bodycontent col-md-4'>
                            <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                                    Plan 2
                            </h4>
                  </div>
                  <div className='bodycontent col-md-4'>
                            <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                                    Plan 3
                            </h4>
                  </div>
                 </div>
             </div>
             </section>
        </div>
    )
}

export default Subscription
