import React, {useState} from 'react'
import Brudcrums from "../../../components/Fontend/Brudcrums"
import Link from 'next/link'
import APIs from '../../../config.js';
import Image from 'next/image'
var moment = require('moment');
import Breadcrumbs from 'nextjs-breadcrumbs';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
  TwitterIcon,
  } from 'next-share';

 
 const Course = ({coursedetail, coursevideo, syllabuss, notes, mcqs})=>{
        const [sociallinks, setsociallinks] = useState('')
    return(
        <>
            <Brudcrums />
            <section> 
              <div className="container">   
              <section className="testimonials2 cid-qKSrnk6eVJ topbrumb" id="testimonials2-e">
              {/* <Breadcrumbs  useDefaultStyle
      transformLabel={(title) => title + '>>'} /> */}
                <div className="container">
                        <div className="row justify-content-center">     
                            <div className="card col-12 col-md-5">
                           
                            <Image src={`${APIs.base_url_home}${coursedetail.course_image}`}  width='600' height='300' alt="currentaffair"/>
                            {/* <Image src={`/assets/images/currentaffairs/${coursedetail.course_image}`}  width='600' height='300' alt="currentaffair"/> */}
                            
                            </div>
                            <div className="card col-12 col-md-5">                            
                                <div className="card-boxs">
                                <h2 className="mbr-fonts-style mb-3 align-center display-2">{coursedetail.course_name}</h2>
                                    <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                    {coursedetail.course_description} 
                                    </p>
                                    <div className="underline align-left">
                                        <div className="line"></div>
                                    </div> 
                                    
                                    <div className=" align-left">
                                    {/* {coursedetail.course_enroll == 1 ?  <button className="btn btn-success display-4">Enroll</button>
                                    : <button className="btn btn-success display-4">UnEnroll</button>} */}
                                        <button className="btn btn-success display-4" onClick={e=>{setsociallinks(true)}}>Share</button>

                                        {sociallinks == true ?
                                        <span className='socialsharebutton'>
                                        <FacebookShareButton
                                        url={'https://github.com/next-share'}
                                        quote={'next-share is a social share buttons for your next React apps.'}
                                        hashtag={'#nextshare'}
                                        >
                                        <FacebookIcon size={32} round />
                                        </FacebookShareButton>

                                        <TwitterShareButton
                                        url={'https://github.com/next-share'}
                                        title={'next-share is a social share buttons for your next React apps.'}
                                        >
                                        <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                        </span>
                                        :''}
                                       
                                    </div>            
                                </div>
                            </div>
                        </div>

                    {coursevideo.map((coursevideo) =>(   
                        <div className="row justify-content-center pt-2" key={coursevideo._id}>     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                {/* <Link href={`/student/coursevideo/${coursevideo._id}`}> */}
                                <div className="row cursorlink">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/videoicon.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1> {coursevideo.video_title}</h1>
                                            <p>{coursevideo.videoLesson} <tab> {moment(coursevideo.videoDate).format('MM Do')} </tab> {coursevideo.videoDuration}</p>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link href={coursevideo.videoPdf}> */}
                                         <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        {/* </Link> */}
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    </div>
                                </div>
                        </div>

                    ))}


                    {notes.map((notes) =>(   
                        <div className="row justify-content-center pt-2" key={notes._id}>     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                {/* <Link href={`/student/notes/notedetails/${notes._id}`}> */}
                                <div className="row cursorlink">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/doc.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1> <strong>Notes</strong></h1>
                                            <p>{notes.notes_name}<tab> {moment(notes.createdAt).format('MM Do')} </tab> </p>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link href={notes.videoPdf}>
                                         <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </Link> */}
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    </div>
                                </div>
                        </div>

                    ))}


            {syllabuss.map((syllabuss) =>(   
                        <div className="row justify-content-center pt-2" key={syllabuss._id}>     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                {/* <Link href={`/student/syllabuses/syllabusdetails/${syllabuss._id}`}> */}
                                <div className="row cursorlink">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/doc.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1><strong>Syllabus</strong> </h1>
                                            <p>{syllabuss.syllabus_name}<tab> {moment(syllabuss.createdAt).format('MM Do')} </tab> </p>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link href={notes.videoPdf}>
                                         <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </Link> */}
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    </div>
                                </div>
                        </div>

                    ))}


                {mcqs.map((mcqs) =>(   
                        <div className="row justify-content-center pt-2" key={mcqs._id}>     
                                <div className="card col-12 col-md-10">
                                <div className="card-box">
                                {/* <Link href={`/student/mcqs/mcqdetails/${mcqs._id}`}> */}
                                <div className="row cursorlink">
                                        <div className="col-md-3">
                                        <Image src={`/assets/images/doc.png`} width='50' height='50' alt='videoicon'/>
                                            
                                        </div>
                                        <div className="col-md-7">
                                        <h1><strong>MCQ</strong></h1>
                                            <p> {mcqs.bank_name}<tab> {moment(mcqs.createdAt).format('MM Do')} </tab> </p>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link href={notes.videoPdf}>
                                         <Image src={`/assets/images/pdfd.png`} width='50' height='50' alt='videoicon'/>
                                        </Link> */}
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    </div>
                                </div>
                        </div>

                    ))}
                    
                        
                </div>
            </section>
             
           
              </div>
           </section>
        </>
    )
}

export default Course;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const {courseid } = params;
     const res = await fetch(`${APIs.base_url}course/coursedetails/${courseid}`);
    const datas = await res.json()
     //console.log(datas)
    const ress = await fetch(`${APIs.base_url}student/coursevideo/video`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({course_id:datas.data._id}),
    });
    const datass = await ress.json()
    //console.log(datass);
    const mcq = await fetch(`${APIs.base_url}student/mcq/getbycourse`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({course_id:datas.data._id}),
    });
    const mcqs = await mcq.json()

    const note = await fetch(`${APIs.base_url}student/notes/getbycourse`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({course_id:datas.data._id}),
    });
    const notes = await note.json()

    const syllabus = await fetch(`${APIs.base_url}student/syllabus/getbycourse`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({course_id:datas.data._id}),
    });
    const syllabuss = await syllabus.json()
     
   // console.log(syllabuss);

        const URLS = APIs.base_url+"payment/status";
        const sendData = JSON.stringify({ category_id: datas.data.category_id,  user: context.req.cookies['cid'] })
    //     //console.log(datas/ata)
    //     const payment = await fetch(URLS, {
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //           },
    //         body:sendData,
    //     });
       
    //    const paymentconfirm =  await payment.json();
      // console.log(paymentconfirm.status_code)
            // if(paymentconfirm.status_code !== 200){
                 
                // return {
                //     redirect: {
                //     permanent: true,
                //     destination: `/student/subscription/${datas.data.category_id}`,
                //   },
                //   props:{},
                // }

            //     return {
            //         props:{
            //            coursedetail: datas.data,
            //            coursevideo: datass.data,
            //            syllabuss: syllabuss.data,
            //            notes: notes.data,
            //            mcqs: mcqs.data,
            //         }
            //     }
              
              
            // }else{
    
    return {
        props:{
           coursedetail: datas.data,
           coursevideo: datass.data,
           syllabuss: syllabuss.data,
                       notes: notes.data,
                       mcqs: mcqs.data,
        }
    }
// }
}