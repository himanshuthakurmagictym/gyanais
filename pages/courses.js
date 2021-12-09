
import Brudcrums from "../components/Fontend/Brudcrums"
import Singlecategory from "../components/Fontend/Classes/Singlecategory";
import APIs from '../config.js';
 
function courses({allcategory}) {
    return (
        <>
        <Brudcrums />
        <section className="features11 cid-qKSpeMafIm pt-5" id="features11-d">
            <div className="container">
            <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">Choose your goal</h2>
            <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
            <div className="row justify-content-center pt-4">
        {allcategory.map((all_classes) => (   
            <Singlecategory singleclass={all_classes} key={all_classes._id} />
        )
        )}
            </div>
            </div>
        </section>  
        </>
    )
}

export default courses

export async function getServerSideProps(context){
    const alldatass =  await fetch(APIs.base_url+'courseCategory/detailsCategory')
   
    const allcategory =  await alldatass.json()
    console.log(allcategory.data)
  
    {
        return {
            props: {
                allcategory: allcategory.data,
            },

        }
    }
} 
