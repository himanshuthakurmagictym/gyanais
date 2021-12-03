import Image from 'next/image'

function Startedclasses() {
    return (
        <>
        <section className="features11 cid-qKSpeMafIm" id="features11-d">




<div className="container">
<h2 className="mbr-fonts-style mbr-section-title align-center  display-2">Recently Started Courses</h2>
<h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
<div className="row justify-content-center pt-4">
  <div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      
        <Image src={`/assets/images/democlasses/1.jpg`} width='200' height='100' alt="class" />
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7">Masterstroke Human Geography Curriculum</h4>
      <h5>Lesson 5 • Started at 3:00 PM</h5>
    </div>
  </div>

  <div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      <Image src={`/assets/images/democlasses/2.jpg`} width='200' height='100'  alt="class" />
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7">Comprehensive Course on Sociology - Optional Paper I</h4>
      <h5>Lesson 5 • Started at 3:00 PM</h5>
    </div>
  </div>

  <div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      <Image src={`/assets/images/democlasses/3.jpg`} width='200' height='100'  alt="class"/>
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7">Masterstroke Human Geography Curriculum</h4>
      <h5>Lesson 5 • Started at 3:00 PM</h5>
    </div>
  </div>

  <div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      <Image src={`/assets/images/democlasses/1.jpg`} width='200' height='100' alt="class" />
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7">Course on Political Science and International Relations</h4>
      <h5>Lesson 5 • Started at 3:00 PM</h5>
    </div>
  </div>
 
</div>
</div>
</section>    
        </>
    )
}

export default Startedclasses
