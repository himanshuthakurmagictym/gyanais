import { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
import Image from 'next/image'
import Link from 'next/link'

function forgotPassword() {

    //const [email, setemail] = useState("");
    //const [password, setpassword] = useState("");
    //const [isOpened, setOpened] = useState(false);

    const setCollapseOpen = (data) =>{
       if(data === 1){
        setOpened(1)
       }

       if(data === 2){
        setOpened(2)
       }
      };
  const loginstudent = () =>{
    console.log('sdfsdf');
  };

  const loginteacher = () =>{
    console.log('sdfsdf');
  };

  const handleemail = () =>{
    console.log('sdfsdf');
  };

  const handlepassword = () =>{
    console.log('sdfsdf');
  };

    return (
        <>
            <Brudcrums />
      <section className=" cid-qKSii1CMsD" > 
      
       
       <div className="container ">
           <div className="row main-row">
               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   
                  
                   <div className="img-box">
                 <Image src={`/assets/images/login.png`} width="400" height="400" />
                 </div>
               </div>           
                {/* login panel */}
               <div className="col-sm-12 col-lg-6 col-md-6  form-container " >               
                   <h2 className="mbr-section-title text-center mt-5 mbr-fonts-style pb-3 display-2">Need help with your password?</h2>
                  
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={loginstudent} method="POST">
                      
                       <div className="row input-main text-center">
                           
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" required="" id="email-form2-7" />
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

export default forgotPassword
