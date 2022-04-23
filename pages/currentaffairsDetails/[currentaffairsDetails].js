import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brudcrums from "../../components/Fontend/Brudcrums"
import APIs from '../../config.js';

function currentaffairsDetails({currentaffairsDetails}) {
    return (
<div>
    <Brudcrums/>
    <section>
        <div className="container">
            <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
                <div className="container">
                    <h2 className="mbr-fonts-style mb-3 align-center display-2">{currentaffairsDetails.currentaffair_title}</h2>
                    <div className="row justify-content-center pt-2">
                        <div className="card col-12 col-md-10">
                            <Image src={`/assets/images/currentaffairs/${currentaffairsDetails.currentaffair_image}`}  width='600' height='300' alt="currentaffair"/>
                            <div className="card-box">
                                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">{currentaffairsDetails.currentaffair_description}</p>
                                <div className="underline align-left">
                                    <div className="line"></div>
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

export default currentaffairsDetails

export const getServerSideProps = async (context) => {
    const {params} = context;
    const {currentaffairsDetails} = params; 
    const res = await fetch(`${APIs.base_url}currentaffair/${currentaffairsDetails}`);
    const datas = await res.json();

    return {
        props: {
            currentaffairsDetails: datas.data
        }
    }

}