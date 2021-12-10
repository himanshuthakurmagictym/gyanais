import React from 'react'
import Image from 'next/image'
function Ourclients() {
    return (
        <>
         <section className="clients cid-qKSnHq96BQ mbr-parallax-background" id="clients1-c">
  

  <div className="mbr-overlay overshow">
  </div>
      <div className="container mb-5">
          <div className="media-container-row">
              <div className="col-12 align-center">
                  <h2 className="mbr-section-title pb-2 mbr-fonts-style mbr-white display-2">
                      Our Amazing Partners</h2>
                  
              </div>
          </div>
      </div>
  
  <div className="container">
      <div className="carousel slide" data-ride="carousel" role="listbox">
          <div className="carousel-inner" data-visible="5">
              
              
              
              
              
          <div className="carousel-item">
                  <div className="media-container-row">
                      <div className="col-md-12">
                          <div className="wrap-img">
                              <Image src={`/assets/images/1.png`} width='100' height='100' className="img-responsive clients-img"  alt="class"/>
                          </div>
                      </div>
                  </div>
              </div><div className="carousel-item ">
                  <div className="media-container-row">
                      <div className="col-md-12">
                          <div className="wrap-img ">
                              <Image src={`/assets/images/2.png`} width='100' height='100' className="img-responsive clients-img"  alt="class"/>
                          </div>
                      </div>
                  </div>
              </div><div className="carousel-item ">
                  <div className="media-container-row">
                      <div className="col-md-12">
                          <div className="wrap-img ">
                              <Image src={`/assets/images/3.png`} width='100' height='100' className="img-responsive clients-img"  alt="class"/>
                          </div>
                      </div>
                  </div>
              </div><div className="carousel-item ">
                  <div className="media-container-row">
                      <div className="col-md-12">
                          <div className="wrap-img ">
                              <Image src={`/assets/images/4.png`} width='100' height='100' className="img-responsive clients-img"  alt="class"/>
                          </div>
                      </div>
                  </div>
              </div><div className="carousel-item ">
                  <div className="media-container-row">
                      <div className="col-md-12">
                          <div className="wrap-img ">
                              <Image src={`/assets/images/5.png`} width='100' height='100' className="img-responsive clients-img"  alt="class"/>
                          </div>
                      </div>
                  </div>
              </div></div>
          <div className="carousel-controls">
              <a data-app-prevent-settings="" className="carousel-control carousel-control-prev" role="button" data-slide="prev">
                  <span aria-hidden="true" className="mbri-left mbr-iconfont"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a data-app-prevent-settings="" className="carousel-control carousel-control-next" role="button" data-slide="next">
                  <span aria-hidden="true" className="mbri-right mbr-iconfont"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
  </div>
  </section>   
        </>
    )
}

export default Ourclients
