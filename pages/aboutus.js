import React from 'react'
import Image from "next/image"
import Brudcrums from "../components/Fontend/Brudcrums";
const aboutus = ()=> {
    return (
        <div>
          <Brudcrums/>
           <section>
              <div className="container">
             
             
              <section className="features7 cid-qKSfgPX2iU pt-5" id="features7-3">
              <h1 className="mbr-fonts-style mbr-section-title align-center  display-2 pb-3">About Us</h1>
<div className="container">
    <div className="row main-row">
        <div className="text-content mb-4 col-lg-6">
            <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2"></h2>
            <h3 className="mbr-fonts-style mbr-text align-left mbr-light display-7">Based on family principles, we are personally responsible for the production process and timing.</h3>
            <div className="list counter-container col-12  mbr-fonts-style mbr-black display-7">
                <ul>
                    <li>
                        Visit our office to meet our professionals
                    </li>
                    <li>
                        Meet our professionals
                    </li>
                    <li>
                        We will help you with your strategy
                    </li>
                </ul>
            </div>
            <div className="mbr-section-btn  align-left pt-3"><a className="btn btn-md btn-info display-4 btn-success" href="index.html">Learn More</a></div>
        </div>
 
        <div className="mbr-figure col-lg-6">
            <Image src={`/assets/images/student.jpg`} width="600" height="400" alt='Mobirise'  />
        </div>

    </div>
</div>
</section>
              </div>
           </section>
        </div>
    )
}

export default aboutus
