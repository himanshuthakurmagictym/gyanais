import Democlass from "./Classes/Democlass"



function DemoClasses({ democlassed }) {
    return (
   
      
<section className="features11 cid-qKSpeMafIm" id="features11-d">
<div className="container">

<h2 className="mbr-fonts-style mbr-section-title align-center  display-2">Our Demo Classes</h2>
<h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
<div className="row justify-content-center pt-4">

{democlassed.map((democlasseds) => { 
        return (
            <Democlass democlass={democlasseds} key={democlasseds.id}/>
         )
         })}



  

 
</div>
</div>
</section>    
    )
}

export default DemoClasses



