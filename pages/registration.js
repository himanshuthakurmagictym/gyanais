import React, {useState} from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import APIs from '../config.js';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
function Registration() {
    const [roles, setRoles] = useState("teacher");
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setlastname] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [passwordSubmitted, setpasswordSubmitted] = useState("");
    const [handlelabel, sethandlelabel] = useState("");
    const notify = () => 
    {
        toast("Registration has been successfully !", { autoClose: 15000 });
        //router.push('/login');
    }
    const router = useRouter();
    
    const handleRoles = (e) =>{
        setRoles(e.target.value)
        console.log(e.target.value)

    }

    const handleUsername = (e) =>{
        setusername(e.target.value)
    }

    const handleFirstname = (e) =>{
        setfirstname(e.target.value)
    }

    const handleLastname = (e) =>{
        setlastname(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePhone = (e) =>{
        setphone(e.target.value)
    }

    const handlePassword = (e) =>{
        setpassword(e.target.value) 
    }

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
   
    const handleRegistration = async(e)=>{
        e.preventDefault();

        if(confirmpassword === password ){
            setpasswordSubmitted("Password has matched")
        
        const logindata = JSON.stringify({ roles: roles, email: email, username: username, firstname: firstname, lastname: lastname, phone: phone,  password: password, confirmpassword: confirmpassword })
        
        const URLs = APIs.base_url+'auth/signup/';    
       // const URLs = 'https://gyaniasapi.herokuapp.com/api/auth/signup/';
        const resss = await fetch(URLs, {
            method:"POST",
            body:logindata,
            headers:{
                "Content-Type":"application/json",
              },
        }).then((res) => {(res.status == '200') ? notify(): console.log(res.statusText) });

        // const resst = resss;
        // console.log(resst.status)
    } else{
        setpasswordSubmitted("Passwords don't match")
    }

    }
    return (
        <>
        <Brudcrums />
        <section className=" cid-qKSii1CMsD" > 
        
        
         <div className="container ">
             <div className="row main-row">
             <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                  
                   {/* <div data-form-alert="" hidden="">Thanks for filling out the form!
                   </div> */}
                   <div className="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" alt="login" />
                 </div>
               </div>
                 <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                     <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2 text-center"> Registration</h2>
                     {/* <div data-form-alert="" hidden="">Thanks for filling out the form!
                     </div> */}
                     <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={handleRegistration} method="POST">
                        
                         <div className="row input-main">
                         <div className="col-md-12 col-lg-12 input-wrap mb-3" >
                               <select className="field display-7 custom-select" id="email-form2-7" value={roles} onChange={handleRoles}>
                                        <option value={APIs.roles[0]} selected>{APIs.roles[0]}</option>  
                                        <option value={APIs.roles[1]}>{APIs.roles[1]}</option>  
                               </select>
                            </div>
                             
                             <div className="col-md-12 col-lg-6 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="firstname" data-form-field="firstname" placeholder="First Name*" value={firstname} onChange={handleFirstname} required="" id="email-form2-7" />
                             </div>
                            
                             <div className="col-md-12 col-lg-6 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="lastname" value={lastname} onChange={handleLastname} data-form-field="Last_name" placeholder="Last Name*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="username" value={username} onChange={handleUsername} data-form-field="Email" placeholder="username*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="email" className="field display-7" name="email" value={email} onChange={handleEmail} data-form-field="Email" placeholder="Email*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="phone" value={phone} onChange={handlePhone} data-form-field="phone" placeholder="phone*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" className="field display-7" name="password" value={password} onChange={handlePassword} placeholder="Password" data-form-field="Password"  required="" minLength="8" id="firstname-form2-7"/>
                                 <label className={handlelabel == 2 ? "labelred":"labelgreen"}>{passwordSubmitted}</label>
                                 
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" minLength="8" className="field display-7" value={confirmpassword} onChange={handleConfirmpassword} name="confirm_password" placeholder="confirm Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
                                 
                             </div>
                             
                         </div>
         
                         

                         <div className="row input-main">
                             <div className="col-md-12 col-lg-12 btn-row">
                                 <span className="input-group-btn">
                                     <button type="submit" className="btn btn-form btn-success display-4">Submit</button>
                                 </span>
                             </div>
                         </div>
                     </form>
                 </div>
                 <ToastContainer />
                
                 
             </div>
         </div>
         </section>
         </>
    )
}

export default Registration
