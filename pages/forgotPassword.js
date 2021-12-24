import React, { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import APIs from '../config.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ForgotPassword() {

    const [email, setemail] = useState("");

    const notify = (res) => 
    {
        //console.log(res)
        if(res.status_code === 200){
             console.log(res.message)
             toast.success(res.message, { autoClose: 5000 });
            
            //setTimeout( ()=>{ router.push('/student/profile') } , 6000);
        }else{
            //console.log(res.status_code)
             toast.error(res.message, { autoClose: 5000 });
        }
        
    }
  
  const handleemail = (e) =>{
    const email = e.target.value;
    setemail(email)
  };

  
  const handleresetpassword = (e) =>{
    e.preventDefault();
    const URLs = APIs.base_url+"auth/forgotpassword";
    const sendData = JSON.stringify({email:email});
      fetch(URLs,{
         method:'POST',
         headers: {
            "Content-Type": "application/json",
          },
          body:sendData,
      }).then(res => res.json())
      .then(data => {(data.status_code == '200') ? notify(data): notify(data) })
      .catch(error => console.log(error))
  }

    return (
        <>
            <Brudcrums />
            
      <section className=" cid-qKSii1CMsD" > 
        <ToastContainer />
       <div className="container ">
           <div className="row main-row">
               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   
                  
                   <div className="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" alt="sd" />
                 </div>
               </div>           
                {/* login panel */}
               <div className="col-sm-12 col-lg-6 col-md-6  form-container " >               
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Need help with your password?</h2>
                  
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={handleresetpassword} method="POST">
                      
                       <div className="row input-main text-center">
                           
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" onChange={handleemail} required="" id="email-form2-7" />
                           </div>
                           
                             
                       </div>
                       
                   
                       
                       <div className="row input-main">
                           <div className="col-md-12 col-lg-12 btn-row">
                          
                               <span className="input-group-btn">
                                   <button href="#" type="submit" className="btn btn-form btn-success display-4 w-100">Submit</button>
                               </span>
                             
                           </div>
                           
                       </div>
                   </form>
                  


                  
               </div>
               
           </div>
       </div>
       </section>
        </>
    )
}

export default ForgotPassword
