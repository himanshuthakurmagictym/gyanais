import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        
<section className="footer1 cid-qKSj0s9f9b" id="footer3-a">

    

<div className="mbr-overlay footerlink" ></div>

<div className="container">
    <div className="media-container-row content text-white">
        <div className="col-12 col-lg-3 col-md-6">
            <div className="media-wrap">
            <Link href="/" passHref > 
                   
                    <Image src="/assets/images/logo.png" width="100" height="100"  alt="logo" />
               </Link> 
            </div>
            
        </div>
        <div className="col-12 col-lg-3 mbr-fonts-style mbr col-md-6">
            <h5 className="pb-3 column-title display-5">
                Address
            </h5>
            <div className="contact-list display-7">
                
                
            <div className="list-item">
                    
                    <p>1234 Street Name City, <br />AA 99999</p>
                </div><div className="list-item">
                    
                    <p>+91 000 0000 001</p>
                </div></div>
        </div>
        <div className="col-12 col-lg-3 mbr-fonts-style mbr col-md-6">
            <h5 className="pb-3 column-title display-5">
                Links
            </h5>
            <div className="mbr-text mbr-fonts-style display-7">
                <ul className="list">
                    <li><Link href="/aboutus" >About us</Link></li>
                    <li><Link href="/courses" >Courses</Link></li>
                    <li><Link href="/contactus" >Contact Us</Link></li>
                </ul>
            </div>
        </div>
        <div className="col-12 col-lg-3 mbr-fonts-style mbr col-md-6">
            <h5 className="pb-3 column-title display-5">
                Links
            </h5>
            <div className="mbr-text mbr-fonts-style display-7">
                <ul className="list">
                    <li>Our Team</li>
                    <li>Our Achievments<br /></li>
                    <li>Our Partners</li>
                    <li>Our Clients</li>
                </ul>
            </div>
        </div>
    </div>

    
</div>
</section>
    )
}

export default Footer
