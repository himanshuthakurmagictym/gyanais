import Image from 'next/image'
const Clientssay = ()=> {
    return (
        <>
        <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">
    <h2 className="mbr-fonts-style mb-3 align-center display-2">What Our Clients Say</h2>
    
    <div className="row justify-content-center pt-2">
        <div className="card col-12 col-md-6">
            <div className="card-box">
                <div className="card-header">
                    <div className="card-img">
                        {/* <img src="assets/images/face1.jpg" alt="Mobirise"/> */}
                        <Image src="/assets/images/face1.jpg"  layout='fill' alt="Picture of the author" />
                    </div>
                    <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                        John Smith
                    </h4>
                </div>
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                    Excellent advertising agency! They applied for the first time, ordered a site and then contextual advertising. 
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
                <p className="mbr-text card-sign mbr-fonts-style align-left mb-0 display-7">
                    Managing Director
                </p>
            </div>
        </div>


        <div className="card col-12 col-md-6">
            <div className="card-box">
                <div className="card-header">
                    <div className="card-img">
                      
                        <Image src="/assets/images/face3.jpg" layout='fill' alt='face' />
                    </div>
                    <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                        John Smith
                    </h4>
                </div>
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                   The manager was polite, constantly in touch, listened attentively, gave good advice.
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
                <p className="mbr-text card-sign mbr-fonts-style align-left mb-0 display-7">
                    Managing Director
                </p>
            </div>
        </div>


    </div>
</div>
</section>

<section className="testimonials2 cid-qKSrquoh0F" id="testimonials2-f">




<div className="container">
    
    
    <div className="row justify-content-center">
        <div className="card col-12 col-md-6">
            <div className="card-box">
                <div className="card-header">
                    <div className="card-img">
                       
                        <Image src="/assets/images/face2-500x500.jpg" layout='fill' alt='face'/>
                    </div>
                    <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                        Amanda Adams</h4>
                </div>
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                    Objectively excellent team with a high level of competence.
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
                <p className="mbr-text card-sign mbr-fonts-style align-left mb-0 display-7">
                    Managing Director
                </p>
            </div>
        </div>


        <div className="card col-12 col-md-6">
            <div className="card-box">
                <div className="card-header">
                    <div className="card-img">
                        {/* <img src="assets/images/face4-500x500.jpg" alt="Mobirise" title=""/> */}
                        <Image src="/assets/images/face4-500x500.jpg" layout='fill' alt='face' />
                    </div>
                    <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                        Amanda Adams</h4>
                </div>
                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                    There are minor flaws, over which it is worth working in your spare time. Fundamentally, everything is ok.
                </p>
                <div className="underline align-left">
                     <div className="line"></div>
                </div>
                <p className="mbr-text card-sign mbr-fonts-style align-left mb-0 display-7">
                    Managing Director
                </p>
            </div>
        </div>


    </div>
</div>
</section>
</>
    )
}

export default Clientssay
