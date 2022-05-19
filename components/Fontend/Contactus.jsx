import React from 'react'
import { useState } from 'react'
import APIs from '../../config';
export default function Contactus() {
          const [email, setEmail] = useState("");
          const [firstname, setFirstname] = useState("");
          const [message, setMessage] = useState("");
          const [submitted, setSubmitted] = useState("");

         const handlefirstNameChange = (e) =>{
            const inputfirstName = e.target.value;
            setFirstname(inputfirstName)
          }

          const handleMessageChange = (e) =>{
            const inputMessage = e.target.value;
            setMessage(inputMessage)
          }

          const handleEmailChange = (e) =>{
            const inputEmail = e.target.value;
            setEmail(inputEmail)
          }

          const sendEmail = (e) => {
            e.preventDefault();
             const URLS = APIs.base_url+"email/email_send";
            //const URLS = "http://localhost:5000/api/email_send";
            const sendmaildata = JSON.stringify({firstname: firstname, email:email, message: message });
            //console.log(sendmaildata);
            const result = fetch(URLS,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body:sendmaildata
            }).then(res  => res.status == '200' ? setSubmitted(true): console.log("Mail Failed"));  
        }
        
    return (
        <section className="map1 cid-qKSii1CMsD" id="form2-7"> 
       <div className="google-map"><iframe frameBorder="0" className="overshowdown" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw" allowFullScreen=""></iframe></div>
        
        <div className="container wrapper">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-8 col-md-6 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Get In Touch</h2>
       
                    {String(submitted) == 'true'?
                     <div className="alert alert-success" data-form-alert="" hidden="">Thanks for filling out the form!
                    </div> 
                    : ''}


                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={sendEmail} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-6 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="firstname" placeholder="First Name" data-form-field="First Name" value={firstname} onChange={handlefirstNameChange} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-12 col-lg-6 input-wrap" data-for="email">
                                <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" required="" value={email} onChange={handleEmailChange} id="email-form2-7" />
                            </div>
                            
                            
                        </div>
        
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 form-group" data-for="message">
                                <textarea type="text" className="form-control display-7" name="message" rows="7" data-form-field="Message" value={message} onChange={handleMessageChange} placeholder="Message" id="message-form2-7"></textarea>
                            </div>
                        </div>
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 btn-row">
                                <span className="input-group-btn">
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">SEND</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 px-0 text-block">            
                    <div className="content-panel">
                        <div className="text-block pb-3">
                            <h3 className="mbr-title mbr-fonts-style align-left mbr-white pb-2 mbr-light display-5">ADDRESS</h3>
                            <p className="mbr-text mbr-fonts-style align-left m-0 display-4">
                            234 Street, New Delhi,
                            Pin Code: 110048
                            </p>
                        </div>
                        <div className="text-block pb-3">
                            <h3 className="mbr-title mbr-fonts-style align-left mbr-white pb-2 mbr-light display-5">CALL US</h3>
                            <p className="mbr-text mbr-fonts-style align-left m-0 display-4">
                           +91 81305 89537
                            </p>
                        </div>
                        <div className="text-block pb-3">
                            <h3 className="mbr-title mbr-fonts-style align-left mbr-white pb-2 mbr-light display-5">E-mail </h3>
                            <p className="mbr-text mbr-fonts-style align-left m-0 display-4">
                          support@thegyaanias.com
                            </p>
                        </div>
                        
                        <div className="social-list pl-0 mb-0 pt-4">
                            <div className="soc-item">
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <span className="mbr-iconfont mbr-iconfont-social socicon-twitter socicon"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.facebook.com/pages/161622667195ss3247" target="_blank" rel="noreferrer">
                                    <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.youtube.com/c/" target="_blank" rel="noreferrer">
                                    <span className="mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span>
                                </a>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
