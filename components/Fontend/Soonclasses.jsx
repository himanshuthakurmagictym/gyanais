import Image from 'next/image'
import Link from 'next/link'
import Singleclass from '../../components/Fontend/Classes/Singleclass';

function Soonclasses({coursessoon}) {
    
  

    return (
        <>
        
        <section className="features11 cid-qKSpeMafIm" id="features11-d">
       
            <div className="container">
            <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">Courses Starting Soon</h2>
            <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
            <div className="row justify-content-center pt-4">
            {coursessoon.slice(0, 4).map((Soonclasses) => { 
                    return (
                        
                            <Singleclass singleclass={Soonclasses} key={Soonclasses.id} />  
                        
                    )
                    })}
            
            </div>
          {Object.keys(coursessoon).length > 3 ?  
          <div className="row input-main text-center">
          <div className="col-md-12 col-lg-12 btn-row">
              <span className="input-group-btn">
                  <Link href="/comingsoonclass"><button href="#" className="btn btn-form btn-success display-4">View More</button></Link>
              </span>
          </div>
</div>:''} 
        

            </div>
</section>    
        </>
    )
}

export default Soonclasses
