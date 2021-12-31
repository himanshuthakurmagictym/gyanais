import React from 'react'
import { useState } from 'react'
import APIs from '../../config';

function ChangePassword() {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("");
    const [submitted, setSubmitted] = useState("");

   const handlefirstName = (e) =>{
      const inputfirstName = e.target.value;
      setFirstname(inputfirstName)
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
        <section className=" cid-qKSii1CMsD" id="form2-7"> 
      
        
        <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Change Password</h2>
       
                   


                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={sendEmail} method="POST">
                       
                        

                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="email" placeholder="Enter Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                       
                        </div>


                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="username" placeholder="Enter username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                                        
                        </div>
        
                        
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-12 btn-row">
                                <span className="input-group-btn">
                                    <button href="#" type="submit" className="btn btn-form btn-success display-4">Submit</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </section>
    )
}

export default ChangePassword
