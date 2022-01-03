import React from 'react'
import { useState } from 'react'
import APIs from '../../config';

function ChangePassword() {
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [handlelabel, sethandlelabel] = useState("");
    const [passwordSubmitted, setpasswordSubmitted] = useState("");

    const handleConfirmpassword = (e) =>{
        setconfirmpassword(e.target.value)
        if(e.target.value === password ){
            sethandlelabel(1)
            
            setpasswordSubmitted("Password has matched")
        }else{
            setpasswordSubmitted("Passwords don't match")
            sethandlelabel(2)
        }

    }
    const notify = (data)=>{
        if(data.status_code === 200){
            toast.success(data.message,{autoClose:2000});
        }else{
            toast.error(data.message,{autoClose:2000});
        }
      }
    

    const sendEmail = (e) => {
      e.preventDefault();
       const URLS = APIs.base_url+"student/changepassword";
      //const URLS = "http://localhost:5000/api/email_send";
      const sendmaildata = JSON.stringify({password:password, confirmpassword:confirmpassword});
      //console.log(sendmaildata);
      const result = fetch(URLS,{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
          body:sendmaildata
      }).then(res  => notify(res.data)).catch(err => console.log(err));   
  }
    return (
        <section className=" cid-qKSii1CMsD" id="form2-7"> 
      
        
        <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Change Password</h2>
       
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={sendEmail} method="POST">
                       
                        

                    <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" className="field display-7" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" data-form-field="Password"  required="" minLength="8" id="firstname-form2-7"/>
                                 <label className={handlelabel == 2 ? "labelred":"labelgreen"}>{passwordSubmitted}</label>
                                
                                 
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" minLength="8" className="field display-7" value={confirmpassword} onChange={handleConfirmpassword} name="confirm_password" placeholder="confirm Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
                                 
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
