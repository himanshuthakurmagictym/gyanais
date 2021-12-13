import Image from 'next/image'

function Clientssay({ testimonialed }){
    return (
        <>
        <section className="testimonials2 cid-qKSrnk6eVJ" id="testimonials2-e">
<div className="container">
    <h2 className="mbr-fonts-style mb-3 align-center display-2">What Our Clients Say</h2>
    
    <div className="row justify-content-center pt-2">
           
    {testimonialed.map((testimonialss) => (
                        <div className="card col-12 col-md-6">
                        <div className="card-box">
                            <div className="card-header">
                                <div className="card-img">
                                
                                    <Image src={`/assets/images/${testimonialss.review_image_link}`}  layout='fill' alt="Picture of the author" />
                                </div>
                                <h4 className="card-title mbr-fonts-style align-center mb-0 mbr-white display-5">
                                     {testimonialss.review_name}
                                </h4>
                            </div>
                            <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                            {testimonialss.review_description}
                            </p>
                            <div className="underline align-left">
                                <div className="line"></div>
                            </div>
                            <p className="mbr-text card-sign mbr-fonts-style align-left mb-0 display-7">
                             {testimonialss.review_position}
                            </p>
                        </div>
                        </div>
    )
    )}


    </div>
</div>
</section>


</>
    )
}

export default Clientssay
