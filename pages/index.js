import Image from 'next/image'
import Head from 'next/head'
import Clientssay from '../components/Fontend/Clientssay'
import Contactus from '../components/Fontend/Contactus'
import Ourclients from '../components/Fontend/Ourclients'
import DemoClasses from '../components/Fontend/Democlasses'
import Team from '../components/Fontend/Team'
import Soonclasses from '../components/Fontend/Soonclasses'
import Startedclasses from '../components/Fontend/Startedclasses'
import APIs from '../config.js';
// import styles from '../styles/Home.module.css'

export default function Home({democlass, testimonialss, coursessoon, recentclasses}) {
  return (
    <div >
      <Head>
        <title>GYANIAS</title>
        <meta name="description" content="GYANIAS" />
      
      </Head>
      <>
      <section className="header5 cid-qKSeIL708B mbr-parallax-background" id="header5-0">

    

<div className="mbr-overlay slideimage" >
</div>

<div className="container">
    <div className="media-container-row mt-5">
        <div className="mb-4 mt-5 content-container align-center col-md-10">
            <h1 className="mbr-section-title pb-3 mbr-fonts-style align-center display-1">India's Best learning Platform</h1>
            <p className="mbr-text pb-3 bt-white mbr-fonts-style p-descr align-center display-5">
            Get Plus subscription and access unlimited live and recorded courses from India best educators</p>
            <span className="input-group-btn ">
              <a href="/login" className="btn btn-form display-3 buttonlink">JOIN CLASS</a>
            </span>
        </div>
       
        
    </div>
</div>
<div className="container-boxes mbr-white">
    <div className="box-item">
        <div className="icon-block-top pb-4">
            <span className="mbr-iconfont btn-success mbri-laptop display-2"></span>
        </div>
        <h4 className="box-item-title pb-3  mbr-fonts-style mbr-black display-5">Daily Live Classes</h4>
        <p className="box-item-text mbr-fonts-style display-7">Want to get your doubts cleared in real time? Want to chat with educators, ask questions, and participate in live polls? Our online classes are the best way to do it. Join our live classes happening every day on diverse topics like cooking, mathematics, and science. Get a free demo class today!</p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="/login">Read More</a></div>
    </div>
    <div className="box-item">
        <div className="icon-block-top pb-4">
            <span className="mbr-iconfont btn-success mbri-mobile2 display-2"></span>
        </div>
        <h4 className="box-item-title pb-3 mbr-fonts-style mbr-black display-5">Live tests & quizzes</h4>
        <p className="box-item-text mbr-fonts-style display-7">Enjoy access to live tests & quizzes, subject-wise notes at your fingertips, mock tests to help you prepare for exams, and revision notes in PDFs. The best thing about our learning portal is that it's not one-size-fits-all. Use our quizzes & tests to see where you're strong and where you need more study time. </p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="/login">Read More</a></div>

    </div>
    <div className="box-item">
        <div className="icon-block-top pb-4">
            <span className="mbr-iconfont btn-success mbri-video display-2"></span>
        </div>
        <h4 className="box-item-title pb-3 mbr-fonts-style mbr-black display-5">Structured Courses</h4>
        <p className="box-item-text mbr-fonts-style display-7">Struggling to find the next step in your career? We've got you covered. With Structured Courses, all of your learning needs are met in one place. You won't have to spend hours sifting through a sea of information to find what matters most to you. Our keynotes, classes and seminars are hand-picked for their value by our expert curriculum team. </p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="/login">Read More</a></div>

    </div>
</div>
</section>

<section className="features7 cid-qKSfgPX2iU" id="features7-3">
<div className="container">
    <div className="row main-row">
        <div className="text-content mb-4 col-lg-6">
            <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2">About Us</h2>
            <h3 className="mbr-fonts-style mbr-text align-left mbr-light display-7">Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution.</h3>
            <div className="list counter-container col-12  mbr-fonts-style mbr-black display-7">
                <ul>
                    <li>
                    Learn anything and everything.
                    </li>
                    <li>
                    You can take any number of courses at any time.
                    </li>
                    <li>
                    See the world through a new perspective. 
                    </li>
                </ul>
            </div>
            <div className="mbr-section-btn  align-left pt-3"><a className="btn btn-md btn-info display-4 btn-success" href="/aboutus">Learn More</a></div>
        </div>
 
        <div className="mbr-figure col-lg-6">
            <Image src={`/assets/images/student.jpg`} width="600" height="400" alt="homepage"/>
        </div>

    </div>
</div>
</section>

<DemoClasses democlassed={democlass} />



<Team />

<section className="counters2 counters cid-qKSi69jkKQ" id="counters2-6">
<div className="container">
    <h2 className="mbr-section-title  align-center mbr-fonts-style display-2">
        Our Achievments</h2>
    <div className="container pt-4 mt-2">
        <div className="media-container-row">
            <div className="card p-3 align-center col-12 col-md-6 col-lg-3">
                <div className="panel-item">
                    <div className="icon-wrap ">
                        <span className="mbr-iconfont mbri-like"></span>
                    </div>

                    <div className="card-text">
                        <h3 className="count pt-3  mbr-fonts-style display-1">
                              4600</h3>
                        <h4 className="mbr-content-title mbr-light mbr-fonts-style display-5">Completed <br/>Classes</h4>
                    </div>
                </div>
            </div>


            <div className="card p-3 align-center col-12 col-md-6 col-lg-3">
                <div className="panel-item">
                    <div className="icon-wrap ">
                        <span className="mbr-iconfont mbri-users"></span>
                    </div>
                    <div className="card-text">
                        <h3 className="count pt-3  mbr-fonts-style display-2">
                              400
                        </h3>
                        <h4 className="mbr-content-title mbr-light mbr-fonts-style display-5">
                            Professional<br/>Teachers</h4>
                    </div>
                </div>
            </div>

            <div className="card p-3 align-center col-12 col-md-6 col-lg-3">
                <div className="panel-item">
                    <div className="icon-wrap ">
                        <span className="mbr-iconfont mbri-clock"></span>
                    </div>
                    <div className="card-text">
                        <h3 className="count pt-3  mbr-fonts-style display-2">
                              3000
                        </h3>
                        <h4 className="mbr-content-title mbr-light mbr-fonts-style display-5">
                            Hours of<br/>Class</h4>
                    </div>
                </div>
            </div>


            <div className="card p-3 align-center col-12 col-md-6 col-lg-3">
                <div className="panel-item">
                    <div className="icon-wrap ">
                        <span className="mbr-iconfont mbri-smile-face"></span>
                    </div>

                    <div className="card-texts">
                         <h3 className="count pt-3  mbr-fonts-style display-2">
                              4000
                        </h3>
                        <h4 className="mbr-content-title mbr-light mbr-fonts-style display-5">
                            Satisfied<br/>Students</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<Soonclasses coursessoon={coursessoon}/>
<Startedclasses recentclasses={recentclasses}/>
<Ourclients  />
<Clientssay testimonialed={testimonialss}/>
<Contactus/>

      </>

    </div>
  )
}
export async function getServerSideProps(context) {
    const res = await fetch(`${APIs.base_url}demodetails/all`)
    const democlass = await res.json()

    const reviews = await fetch(`${APIs.base_url}reviewtype/review`)
    const reviewss = await reviews.json()
    

    const result = await fetch(`${APIs.base_url}course/comingsoonclasses`)
    const coursessoon = await result.json()

    const recent = await fetch(`${APIs.base_url}course/all`)
    const recentclasses = await recent.json()

    
  
    return {
     props: {
        democlass : democlass.data.slice(0, 3),
        coursessoon : coursessoon.data,
        recentclasses : recentclasses.data,
        testimonialss : reviewss.data
      },
    }
  }