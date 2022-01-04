
import Brudcrums from "../../components/Fontend/Brudcrums"
import { parseCookies } from 'nookies'
import APIs from '../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'
import Singleclass from "../../components/Fontend/Classes/Singleclass"
function Profile({datas, paidcourse}) {

   

    return (
        <div>
            <Brudcrums/>
            <section>
              <div className="container">
              <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
            <div className="container">   
                <div className="row justify-content-center pt-2"> 
                    <div className="card col-12 col-md-12">
                    <div className="card-box">
                    <div className="row"> 
        
                        <div className="col-md-3">
                                 <Image src={`/assets/images/avatar.png`}  width='150' height='150' alt="avatar"/>
                        </div>

                        <div className=" col-md-9">
                        
                                <h3 className="mbr-fonts-style mb-3 align-left display-2">{datas.firstname} {datas.lastname}</h3>
                                Joined gyanIAS in {moment(datas.createdAt).format('MMMM YYYY')}
                               
                                <p className="mbr-text  mbr-fonts-style align-left m-0 display-7 pt-3">
                                <b>Username: </b>{datas.username}
                                </p>

                                <p className="mbr-text  mbr-fonts-style align-left m-0 display-7">
                                <b>Email: </b>{datas.email} 
                                </p>
                                <p className="mbr-text  mbr-fonts-style align-left m-0 display-7">
                                <b>39K Watch mins</b>
                                </p>
                               
                                <div className="underline align-left">
                                <div className="line"></div>
                                   
                        </div>
                        </div>
                     </div>
                    </div>
           
                 </div>



                </div>
             </div>
        </section>


<section className="features11 cid-qKSpeMafIm pt-5 profilebox" id="features11-d">
<div className="container">   
    <div className="row justify-content-center pt-2"> 
        <div className="card col-12 col-md-12">
        <h1 className="mbr-fonts-style mb-3 align-center display-2">All subscription courses</h1>
        <div className="row"> 
        
                        <div className=" col-md-12">
                        <div className="">
                                                       
                                {paidcourse.map((categoryid) =>{
                                    return(
                                        <>
                                        <li key={categoryid.category_id}>{categoryid.category_id}</li>
                                       
                                                {categoryid.paid_user.map((paiduser)=>(
                                                    <>
                                                   <Link href="login" passHref>
                                                    <Singleclass singleclass={paiduser} key="{paiduser[0]._id}" />
                                                    </Link>
                                                    </>
                                                ))}
                                        </>
                                            )

                                })}


                                     
                               
                                <div className="underline align-left">
                                <div className="line"></div>
                        
                       
                        </div>
                        </div>
                </div>
            </div>
           
        </div>



    </div>
</div>
</section>
             
           
              </div>
           </section>
        </div>
    )
}

export default Profile

export async function getServerSideProps(ctx){
    const cookie = await parseCookies(ctx);
  
    if(!cookie.token){
        
        return {
            redirect: {
              permanent: false,
              destination: "/login",
            },
            props:{},
          };

    }else{
       
      
        const sendData = JSON.stringify({token:cookie.token})
        const res = await fetch(`${APIs.base_url}auth/verifytoken`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:sendData,
       });
       const datas =  await res.json();

       const sendData2 = JSON.stringify({user:datas.data._id})
       const ress = await fetch(`${APIs.base_url}payment/getPayment`, {
           method:"POST",
           headers: {
               "Content-Type": "application/json",
           },
           body:sendData2,
      });
      const paidcourse =  await ress.json();             
       return {
        props: {paidcourse: paidcourse.data, datas: datas.data}
     }

    }
    

  
}

