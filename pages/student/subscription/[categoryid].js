import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from "../../../components/Fontend/Brudcrums"
import APIs from '../../../config.js';
import {useRouter} from 'next/router'
import {useAppContext} from '../../../components/Fontend/Layout'
function Subscription({packages, categoryName}) {
    const router = useRouter();
    const {categoryid} = router.query;
    const userdetail = useAppContext();
    const [amount, setamount] = useState("")
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };

      const makePayment = async (Newamount) => {
           //console.log(Newamount)
        const res = await initializeRazorpay();
    
        if (!res) {
           
          alert("Razorpay SDK Failed to load");
          return;
        }
        
        // Make API call to the serverless API
        // const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
        //   t.json()
        // );
        //console.log(data);
        var options = {
          key: APIs.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Gyan IAS "+categoryName,
          currency: "INR",
          amount: Newamount,
          // order_id: userdetail._id,
          description: "Subscription of "+categoryName,
          image: "https://manuarora.in/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
           alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: userdetail.firstname,
            email: userdetail.email,
            contact: userdetail.phone,
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };


    return (
        <div>
             <Brudcrums/>
             <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
             <div className='container'>
             <h2 className="mbr-fonts-style mbr-section-title align-center  display-2 mb-5">Payment Plan for {categoryName}</h2>
                 <div className='row '>
               {packages.map((subscription)=>(
                        <div className='bodycontent col-md-4'>
                        <h4 className="card-titles mbr-fonts-style align-center mb-0 mbr-white display-5">
                            {subscription.packageName}   
                        </h4>

                        <p className="mbr-text card-text mbr-fonts-style mbr-white align-center m-0 display-7" >
                                <p> {subscription.packageDesc} </p>
                                
                             <ul className='align-left'>
                             <li>India's best educators</li><li>Interactive live classes</li><li>Structured courses &amp; PDFs</li>

                            {/* <ul class="align-left"><li>India's best educators</li><li>Interactive live classes</li><li>Live tests &amp; quizzes</li><li>Structured courses &amp; PDFs</li></ul> */}
                            </ul> 
                            <h4>Rs.{subscription.packageAmount}</h4>
                            <button onClick={()=>{makePayment(subscription.packageAmount); }} className='btn btn-md btn-info display-4 btn-success'>Get Subscription</button>
                        </p>
                        </div>
               ))}
                 
                 </div>
             </div>
             </section>
        </div>
    )
}

export default Subscription

export const getServerSideProps = async (context) => {
const {params} =  context
const res = await fetch(`${APIs.base_url}subscription/${params.categoryid}`);
const datas = await res.json()


const category = await fetch(`${APIs.base_url}courseCategory/${params.categoryid}`);
const result = await category.json();
const categoryName = result.data.course_category_name;
 return {
     props:{packages:datas.data, categoryName:categoryName }
 }
}