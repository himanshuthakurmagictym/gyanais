import { useState } from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
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
                   <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Student Login</h2>
                   {/* <div data-form-alert="" hidden="">Thanks for filling out the form!
                   </div> */}
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={loginstudent} method="POST">
                      
                       <div className="row input-main">
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" required value={email} onChange={handleemail} id="email-form2-7" />
                           </div>
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                               <input type="password" className="field display-7" name="firstname" placeholder="Password" data-form-field="Password"  required value={password} onChange={handlepassword} id="firstname-form2-7"/>
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

               <div className=" col-sm-12 col-lg-6 col-md-6  form-container" >
                   <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Teacher Login</h2>
                   {/* <div data-form-alert="" hidden="">Thanks for filling out the form!
                   </div> */}
                   <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={loginstudent} method="POST">
                      
                       <div className="row input-main">
                           
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                               <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" required="" id="email-form2-7" />
                           </div>
                           <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                               <input type="password" className="field display-7" name="firstname" placeholder="Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
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
       </>
    )
}

export default Login
