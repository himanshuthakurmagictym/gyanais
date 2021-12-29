import React, { useEffect, useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APIs from '../config.js';
import { useRouter } from 'next/router'


function Resetpassword({datas}) {
    const [handlelabel, sethandlelabel] = useState("");
    const [password, setepassword] = useState("");
    const [confirmpassword, seteconfirmpassword] = useState("");
    const [email, setemail] = useState("");
    const [passwordSubmitted, setpasswordSubmitted] = useState("");
    const router = useRouter();
    const  {token}  = router.query;
  
    
   

    const notify = (res) => 
    {
        //console.log(res)
        if(res.status_code === 201){
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

  const handleConfirmpassword = (e) =>{
    seteconfirmpassword(e.target.value)
    if(e.target.value === password ){
        sethandlelabel(1)
        
        setpasswordSubmitted("Password has matched")
    }else{
        setpasswordSubmitted("Passwords don't match")
        sethandlelabel(2)
    }

}



    //    useEffect(()=>{
       
        //    const alldata = JSON.stringify({ token:token });
        //    //const alldata = token
        //    console.log("dd"+alldata);
        //    console.log("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM0MmE5NzBjNGY1NzQ4MDU5MDZmYzciLCJpYXQiOjE2NDA3NjQ0NjAsImV4cCI6MTY0MDc2NTA2MH0.PdlqKjKaYOLFWJ2CSt8sf4E1CHrPznHSfUFHnuklnG8")
    //     fetch(APIs.base_url+"auth/verifytoken", {
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //           },
    //         body:JSON.stringify({ token:token },
    //     }).then(res => res.json())
    //     .then(data => (data.status_code === 500) ? sendexpiretoken(data) : setemail(data.email))
    //     .catch(err => console.log(err));
    //    }, [token])
    
    

      


        


    

  
  const handleresetpassword = async (e) =>{
    
    e.preventDefault();
    if(confirmpassword === password ){
        setpasswordSubmitted("Password has matched")

    const URLs = APIs.base_url+"/auth/updatepassword";
    const sendData = JSON.stringify({password:password, confirmpassword: confirmpassword, email:datas.email});
    console.log(sendData)
      await fetch(URLs,{
         method:'POST',
         headers: {
            "Content-Type": "application/json",
          },
        //   credentials: 'include',
          body:sendData,
      }).then(res => res.json())
      .then(data =>{data.status_code == '201' ? notify(data): notify(data)} )
      .catch(error => console.log(error))

    }else{
        setpasswordSubmitted("Passwords don't match")
    }

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
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Please change your password</h2>
                  
                   <form className="mbr-form"  data-form-title="gyan" onSubmit={handleresetpassword} method="POST">
                      
                       <div className="row input-main text-center">
                           
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="password"  minLength="8" className="field display-7" data-form-field="Email" placeholder="Password*" onChange={handlepassword} required="" id="email-form2-7" />
                               <label className={handlelabel == 2 ? "labelred":"labelgreen"}>{passwordSubmitted}</label>
                           </div>

                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="password" minLength="8" className="field display-7" data-form-field="Email" placeholder="Confirm Password*" onChange={handleConfirmpassword} required="" id="email-form2-7" />
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
export async function getServerSideProps(context) {
    //console.log(context.query.token)
    
    const res = await fetch(APIs.base_url+"auth/verifytoken", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({ token:context.query.token }),
    });
    const datas =  await res.json();
    //console.log(datas)
    
    if(datas.status_code === 500){
        return {
            redirect: {
            permanent: false,
            destination: "/forgotPassword?token=1",
          },
            props: {datas: datas.status_code}
        }  
    }

  

    return {
        props: {datas:datas.data || ""}
    }

}