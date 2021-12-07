import { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../config.js';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import {useRouter} from 'next/router'



const Login = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [rules, setRules] = useState("teacher");
    const [submitted, setSubmitted] = useState("");
    const [isOpened, setOpened] = useState(false);
    const notify = () => toast("login has been successfully !", { autoClose: 15000 });
    const router  = useRouter();

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

      const handlerules = (e) =>{
        const rules = e.target.value;
        setRules(rules)
      };

  const handleLogin = (e) =>{
    e.preventDefault();
    const sendData = JSON.stringify({ email: email, password: password, rules: rules})
    const URLS = "http://localhost:2000/auth/login";
    console.log(sendData);
    const ress = fetch(URLS, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:sendData,
    }).then(res  => res.status == '200' ? { notify() {setSubmitted(true)}}: console.log("login Failed"));

    const res2 = ress.json();
    if(res2.error){
         console.log(res2.error)
    }else{
        console.log(res2)
        cookie.set('token',res2.token)
        cookie.set('user',res2.user)
        router.push('/profile')
     }

  };





    return (
      <>
      <Brudcrums />
      <section className=" cid-qKSii1CMsD" > 
     <ToastContainer />
       
       <div className="container ">
           <div className="row main-row">
               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   
                  
                   <div class="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" />
                 </div>
               </div>            
                {/* login panel */}
               <div className="col-sm-12 col-lg-6 col-md-6  form-container " >
                            
                           
                   
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Sign in with your Email</h2>
                  
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={handleLogin} method="POST" >
                      
                       <div className="row input-main">
                            <div className="col-md-12 col-lg-12 input-wrap mb-3" >
                               <select className="field display-7 custom-select" id="email-form2-7" name="rule" value={rules} onChange={handlerules}>
                                        <option value="teacher">Teacher</option>  
                                        <option value="student">Student</option>  
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
                    
                           <Link href="/forgotPassword"><label>Forgot your password? </label></Link>  
                               <span className="input-group-btn">
                                   <button href="#" type="submit" className="btn btn-form btn-success display-4 w-100">Submit</button>
                               </span>
                               <Link href="/registration"><label>Don't have an account? Sign up for free. </label></Link> 
                                
                                 
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
