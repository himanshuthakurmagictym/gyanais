import React, { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import APIs from '../config.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {useAppContext} from '../components/Fontend/Layout'
function EmailVerification() {
    const userdetail = useAppContext();
    const [emailotp, setemailotp] = useState("");
    const router = useRouter();
    const  {token}  = router.query;

    if(token == 1){
        toast.error("otp has expired. Please resent otp after sometime", { autoClose: 5000 });
    }

    const notify = (res) => 
    {
        //console.log(res)
        if(res.status_code === 200){
             console.log(res.message)
             toast.success(res.message, { autoClose: 5000 });
             router.push('/student/profile') ;
            //setTimeout( ()=>{ router.push('/student/profile') } , 6000);
        }else{
            //console.log(res.status_code)
             toast.error(res.message, { autoClose: 5000 });
        }
        
    }

    useEffect(() => {
        if (userdetail) router.push("/student/profile");
      }, [userdetail]);
  
  const handleemailotp = (e) =>{
    const email = e.target.value;
    setemailotp(email)
  };

  
  const handleresetpassword = (e) =>{
    e.preventDefault();
    const URLs = APIs.base_url+"auth/emailotp";
    const sendData = JSON.stringify({emailotp:emailotp, _id:userdetail._id});
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
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Please input your OTP</h2>
                  
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={handleresetpassword} method="POST">
                      
                       <div className="row input-main text-center">
                           
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="password" className="field display-7" name="emailotp" placeholder="OTP*" onChange={handleemailotp} required="" id="email-form2-7" />
                           
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

export default EmailVerification
export const getServerSideProps = async (context) => {
    if(context.req.cookies['token']){
            const sendData = JSON.stringify({token:context.req.cookies['token']})
            const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:sendData,
        });
        const result =  await res.json();

        if(result.data.isVerified === '1'){
            //console.log(result.data.isVerified)
            return {
                redirect: {
                permanent: true,
                destination: `/student/profile`,
              },
              props:{},
            }

            }else{

                return {
                  props:{},
                }

            }
    }else{
        return {
            redirect: {
            permanent: true,
            destination: `/student/profile`,
          },
          props:{},
        }

    }
}
