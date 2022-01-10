import React from 'react'
import Brudcrums from "../../../components/Fontend/Brudcrums"
import Singleclass from "../../../components/Fontend/Classes/Singleclass"
import Link from 'next/link'
import APIs from '../../../config.js';
import {useAppContext} from '../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

function Category({allclasses, categoryid}) {
    const userdetail = useAppContext();
    const router = useRouter();
    const URLS = APIs.base_url+"payment/paymentStatus";
    const sendData = JSON.stringify({  categoryid: categoryid,  userid: userdetail._id })
    const ress =  fetch(URLS, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:sendData,
    })
    .then(res => res.json())
    .then(data => {
        (data.status_code == '200') ? notify(data): router.push({
            pathname: '/subscription/[categoryid]',
            query: { categoryid: categoryid},
          }) 
    })
    .catch((error) => console.log(error));

    const notify =(data) =>{
        toast.success( data.message, { autoClose: 5000 });
    }


    return (
        <>
        <Brudcrums />
        
        <section className="features11 cid-qKSpeMafIm pt-5" id="features11-d">
            <div className="container">
            <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">All Classes</h2>
            <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
           <Link href="login" passHref>
            <div className="row justify-content-center pt-4">
            {allclasses.map((all_class) => (
                <Singleclass singleclass={all_class} key="{allclasses[0]._id}" />
            ))}
            
            </div>
            </Link>
            </div>
        </section>  
        </>
    )
}

export default Category

export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {categoryid } = params;
    const res = await fetch(`${APIs.base_url}course/${categoryid}`);
    const datas = await res.json()
    //console.log(datas) 
    return {
        props: {
            allclasses: datas.data,
            categoryid
        }
    }

}
