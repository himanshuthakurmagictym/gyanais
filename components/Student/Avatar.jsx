import React from 'react'
import { useState, useEffect } from 'react'
import APIs from '../../config';
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppContext} from '../Fontend/Layout'
function Avatar() {
    const userdetail = useAppContext();
    const Imageurl =`${APIs.base_url_home} ${userdetail.photo}`;
    const [avatar, setAvatar] = useState();
    const [user, setuser] = useState("");
 
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {  
        setuser(userdetail._id)
    }, [userdetail])

    const notify = (data)=>{
        if(data.status_code === 200){
            toast.success(data.message,{autoClose:2000});
        }else{
            toast.error(data.message,{autoClose:2000});
        }
      }
    
      

    const sendAvatar = async (e) => {
      e.preventDefault();
       const URLS = APIs.base_url+"auth/uploadPhoto";
      const body = new FormData();
        body.append("avatar", avatar);
        body.append("user", user);
      //console.log(sendmaildata);
      const result = await fetch(URLS,{
          method: "POST",
        //   headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
          body
      }).then(res => res.json()).then(res  => notify(res)).catch(err => console.log(err)); 
  }
    return (
        <>
             <section className=" cid-qKSii1CMsD" id="form2-7"> 
      
             <ToastContainer />
      <div className="container ">
          <div className="row main-row">
              <div className="col-sm-12 col-lg-12 col-md-12 form-container" data-form-type="formoid">
                  <h2 className="mbr-section-title mbr-fonts-style pb-3 display-2">Upload Avatar</h2>
     

                  <form className="mbr-form"  data-form-title="My Mobirise Form" onSubmit={sendAvatar} method="POST">
                     
                      <div className="row input-main">
                          <div className="col-md-12 col-lg-6 input-wrap" data-for="firstname">
                              <input type="file" className="field display-7" name="firstname" placeholder="First Name" data-form-field="First Name" accept="image/*"  onChange={(e)=>{setAvatar(e.target.files[0])}} required="" id="firstname-form2-7"/>
                          </div>
                          <div className="col-md-12 col-lg-6 input-wrap text-center" >
                        
                                <Image src={userdetail.photo?`${APIs.base_url_home}${userdetail.photo}`:(avatar?URL.createObjectURL(avatar):'/assets/images/student.png')} width={200} height={200} alt="avatar"/>
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

export default Avatar
