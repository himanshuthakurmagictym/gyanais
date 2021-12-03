import React from 'react'
import Brudcrums from "../components/Fontend/Brudcrums"
function registration() {

    const registrationteacher = ()=>{

    }

    const registrationstudent = ()=>{
        
    }
    return (
        <>
        <Brudcrums />
        <section className=" cid-qKSii1CMsD" > 
        
         
         <div className="container ">
             <div className="row main-row">
                 <div className=" col-sm-12 col-lg-12 col-md-12  form-container" >
                     <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Student/Teacher Registration</h2>
                     {/* <div data-form-alert="" hidden="">Thanks for filling out the form!
                     </div> */}
                     <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={registrationstudent} method="POST">
                        
                         <div className="row input-main">
                             
                             
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="firstname" data-form-field="firstname" placeholder="First Name*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="Last_name" data-form-field="Last_name" placeholder="Last Name*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="username" data-form-field="Email" placeholder="username*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="email" className="field display-7" name="email" data-form-field="Email" placeholder="Email*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="email">
                                 <input type="text" className="field display-7" name="phone" data-form-field="phone" placeholder="phone*" required="" id="email-form2-7" />
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" className="field display-7" name="password" placeholder="Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
                             </div>
                             <div className="col-md-12 col-lg-12 input-wrap" data-for="firstname">
                                 <input type="password" className="field display-7" name="confirm_password" placeholder="confirm Password" data-form-field="Password"  required="" id="firstname-form2-7"/>
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

export default registration
