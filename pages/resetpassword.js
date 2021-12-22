import React, { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import APIs from '../config.js';
function Resetpassword() {

    const [password, setepassword] = useState("");

    const notify = (res) => 
    {
        //console.log(res)
        if(res.status_code === 200){
            // console.log(res.data)
             toast.success(res.message, { autoClose: 5000 });
            
            //setTimeout( ()=>{ router.push('/student/profile') } , 6000);
        }else{
            //console.log(res.status_code)
             toast.error(res.message, { autoClose: 5000 });
        }
        
    }
  
  const handlepassword = (e) =>{
    const password = e.target.value;
    setepassword(password)
  };

  const handleconfirmpassword = (e) =>{
    const confirmpassword = e.target.value;
    seteconfirmpassword(confirmpassword)
  }

  
  const handleresetpassword = (e) =>{
    e.preventDefault();
    const URLs = APIs+"/auth/forgetpassword";
    const sendData = JSON.stringify({email:email});
      fetch(URLs,{
         method:'POST',
         headers: {
            "Content-Type": "application/json",
          },
          body:sendData,
      }).then(res => res.json())
      .then(res.status_code == '200' ? notify(data): notify(data) )
      .catch(error => console.log(error))
  }

    return (
        <>
            <Brudcrums />
      <section className=" cid-qKSii1CMsD" > 
      
       
       <div className="container ">
           <div className="row main-row">
               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   
                  
                   <div className="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" alt="sd" />
                 </div>
               </div>           
                {/* login panel */}
               <div className="col-sm-12 col-lg-6 col-md-6  form-container " >               
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Please change your password</h2>
                  
                   <form className="mbr-form"  data-form-title="gyan" onSubmit={handleresetpassword} method="POST">
                      
                       <div className="row input-main text-center">
                           
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="password" className="field display-7" data-form-field="Email" placeholder="Password*" onChange={handlepassword} required="" id="email-form2-7" />
                           </div>

                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="password" className="field display-7" data-form-field="Email" placeholder="Confirm Password*" onChange={handleconfirmpassword} required="" id="email-form2-7" />
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

export default Resetpassword
