import React, { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
var CryptoJS = require("crypto-js");

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState(APIs.roles[0]);
    const [submitted, setSubmitted] = useState("");
    const [isOpened, setOpened] = useState(false);
    const router  = useRouter();
    const notify = (res) => 
    {
         //console.log(res)
        if(res.status_code === 200){

             toast.success(res.message, { autoClose: 5000 });
             const realtoken = res.data.tokens.access.token;
             cookie.set('token',realtoken, { expires: new Date(res.data.tokens.access.expires), secure: true, sameSite: 'strict' })
            //  cookie.set('user',CryptoJS.AES.encrypt(JSON.stringify(res.data.user), '619619').toString(), { expires: new Date(res.data.tokens.access.expires), secure: true, sameSite: 'strict' })          
            
             if(res.data.user.roles === APIs.roles[1]){
            setTimeout(()=>{ router.push('/student/profile') } , 6000);
             }else{

                setTimeout( ()=>{ router.push('/teacher/profile') } , 6000);
             }
        }else{
            //console.log(res.status_code)
             toast.error(res.message, { autoClose: 5000 });
        }
        
    }

    
  

    const setCollapseOpen = (data) =>{
       if(data === 1){
        setOpened(1)
       }

       if(data === 2){
        setOpened(2)
       }
      };

      const handleemail = (e) =>{
       const email = e.target.value;
       setemail(email)
      };
    
      const handlepassword = (e) =>{
        const password = e.target.value;
        setPassword(password)
      };

      const handleroles = (e) =>{
        const roles = e.target.value;
        setRoles(roles)
      };

  const handleLogin = async (e) =>{
    e.preventDefault();
    const sendData = JSON.stringify({ email: email, password: password, roles: roles})
    const URLS = APIs.base_url+"authlogin/login";
    //console.log(sendData);
    const ress = await fetch(URLS, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:sendData,
    })
    .then(res => res.json())
    .then(data => {(data.status_code == '200') ? notify(data): notify(data) })
    .catch((error) => console.log(error));

  };





    return (
      <>
      <Brudcrums />
      <section className=" cid-qKSii1CMsD" > 
     <ToastContainer />
       
       <div className="container ">
           <div className="row main-row">
               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   
                  
                   <div className="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" alt="login" />
                 </div>
               </div>            
                {/* login panel */}
               <div className="col-sm-12 col-lg-6 col-md-6  form-container " >
                            
                           
                   
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Sign in with your Email</h2>
                  
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={handleLogin} method="POST" >
                      
                       <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap mb-3" >
                               <select className="field display-7 custom-select" id="email-form2-7" name="role" value={roles} onChange={handleroles}>
                                        <option value={APIs.roles[0]}>{APIs.roles[0]}</option>  
                                        <option value={APIs.roles[1]}>{APIs.roles[1]}</option>  
                               </select>
                            </div>
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="email" className="field display-7" value={email} onChange={handleemail} name="email" data-form-field="Email" placeholder="Email*" required="" id="email-form2-7" />
                           </div>
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                               <input type="password" className="field display-7" value={password} onChange={handlepassword} name="firstname" placeholder="Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
                           </div>
                             
                       </div>
                       
                   
                       
                       <div className="row input-main">
                           <div className="col-md-12 col-lg-12 btn-row">
                    
                           <Link href="/forgotPassword" passHref><label>Forgot your password? </label></Link>  
                               <span className="input-group-btn">
                                   <button href="#" type="submit" className="btn btn-form btn-success display-4 w-100">Submit</button>
                               </span>
                               <Link href="/registration" passHref><label>Don't have an account? Sign up for free. </label></Link> 
                                
                                 
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

export default Login
