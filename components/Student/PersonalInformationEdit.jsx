import React, {useEffect} from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../../config.js';
import 'react-toastify/dist/ReactToastify.css';
import {useAppContext} from '../Fontend/Layout'
export default function PersonalInformationEdit() {
    const userdetail = useAppContext();
    
          const [email, setEmail] = useState("");
          const [firstname, setFirstname] = useState("");
          const [Lastname, setLastname] = useState("");
          const [username, setUsername] = useState("")
          const [address, setAddress] = useState("");
          const [_id, set_id] = useState("");
          
          useEffect(() => { 
            setEmail(userdetail.email)
            setFirstname(userdetail.firstname)
            setLastname(userdetail.lastname)
            setUsername(userdetail.username)
            setAddress(userdetail.address)
            set_id(userdetail._id)
        }, [userdetail])
         
          const notify = (data)=>{
              console.log(data)
            if(data.status_code === 200){
                toast.success(data.message,{autoClose:2000});
            }else{
                toast.error(data.message,{autoClose:2000});
            }
          }        

          

          const sendEmail = (e) => {
            e.preventDefault();
             const URLS = APIs.base_url+"auth/userupdate";
           
            const sendmaildata = JSON.stringify({firstname: firstname, lastname: Lastname, email:email, address: address, username: username, _id:_id });
            //console.log(sendmaildata);
            const result = fetch(URLS,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body:sendmaildata
            }).then(res => res.json()).then(res  =>  notify(res) ).catch(err => console.log(err));  
        }
        
    return (
        <section className=" cid-qKSii1CMsD" id="form2-7"> 
      
        
        <div className="container ">
            <div className="row main-row">
                <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                    <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Persona Information</h2>
                    <ToastContainer />
                   
                    <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={sendEmail} method="POST">
                       
                        <div className="row input-main">
                            <div className="col-md-12 col-lg-6 input-wrap" data-for="firstname">
                                <input type="text" className="field display-7" name="firstname" placeholder="First Name" data-form-field="First Name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} required="" id="firstname-form2-7"/>
                            </div>
                            <div className="col-md-12 col-lg-6 input-wrap" data-for="email">
                                <input type="text" className="field display-7" name="lastname" data-form-field="Email" placeholder="Last Name*" required="" value={Lastname} onChange={(e)=>{setLastname(e.target.value)}} id="email-form2-7" />
                            </div>             
                        </div>

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
                            <div className="col-md-12 col-lg-12 form-group" data-for="message">
                                <textarea type="text" className="form-control display-7" name="address" rows="2" data-form-field="Message" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter Address" id="message-form2-7"></textarea>
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
