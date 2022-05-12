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
    <div className="media-container-row">
        <div className="mb-4 content-container align-center col-md-10">
            <h1 className="mbr-section-title pb-3 mbr-fonts-style align-center display-1">India's Best learning Platform</h1>
            <p className="mbr-text pb-3 bt-white mbr-fonts-style p-descr align-center display-5">
            Get Plus subscription and access unlimited live and recorded courses from India best educators</p>
            <span className="input-group-btn ">
              <button href="#" type="submit" className="btn btn-form display-3 buttonlink">JOIN CLASS</button>
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
        <p className="box-item-text mbr-fonts-style display-7">UX-design is associated with the understanding of the behavior of people within the application. </p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="index.html">Read More</a></div>
    </div>
    <div className="box-item">
        <div className="icon-block-top pb-4">
            <span className="mbr-iconfont btn-success mbri-mobile2 display-2"></span>
        </div>
        <h4 className="box-item-title pb-3 mbr-fonts-style mbr-black display-5">Live tests & quizzes</h4>
        <p className="box-item-text mbr-fonts-style display-7">Children illustration should be contrast. Otherwise, the child is difficult to focus on something. </p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="index.html">Read More</a></div>

    </div>
    <div className="box-item">
        <div className="icon-block-top pb-4">
            <span className="mbr-iconfont btn-success mbri-video display-2"></span>
        </div>
        <h4 className="box-item-title pb-3 mbr-fonts-style mbr-black display-5">Structured Courses</h4>
        <p className="box-item-text mbr-fonts-style display-7">A set of marketing tools and management, consisting in the development of the brand of products.</p>
        <div className="mbr-section-btn"><a className="btn-underline mr-3 text-info display-4" href="index.html">Read More</a></div>

    </div>
</div>
</section>

<section className="features7 cid-qKSfgPX2iU" id="features7-3">
<div className="container">
    <div className="row main-row">
        <div className="text-content mb-4 col-lg-6">
            <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2">About Us</h2>
            <h3 className="mbr-fonts-style mbr-text align-left mbr-light display-7">Based on family principles, we are personally responsible for the production process and timing.</h3>
            <div className="list counter-container col-12  mbr-fonts-style mbr-black display-7">
                <ul>
                    <li>
                        Visit our office to meet our professionals
                    </li>
                    <li>
                        Meet our professionals
                    </li>
                    <li>
                        We will help you with your strategy
                    </li>
                </ul>
            </div>
            <div className="mbr-section-btn  align-left pt-3"><a className="btn btn-md btn-info display-4 btn-success" href="index.html">Learn More</a></div>
        </div>
 
        <div className="mbr-figure col-lg-6">
            <Image src={`/assets/images/07.jpg`} width="600" height="300" alt="Mobirise"/>
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
                        <h3 className="count pt-3  mbr-fonts-style display-1">
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
                        <h3 className="count pt-3  mbr-fonts-style display-1">
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
                         <h3 className="count pt-3  mbr-fonts-style display-1">
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