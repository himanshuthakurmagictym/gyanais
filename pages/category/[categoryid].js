import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import Singleclass from "../../components/Fontend/Classes/Singleclass"

function Category({allclasses, categoryid}) {

    return (
        <>
        <Brudcrums />
        <section className="features11 cid-qKSpeMafIm pt-5" id="features11-d">
            <div className="container">
            <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">All Classes</h2>
            <h3 className="mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-7">We also offer services in the live class, doubts, chat, paid and utilization of signage.</h3>
            {/* <h4>{categoryid}</h4> */}
            <div className="row justify-content-center pt-4">
            {allclasses.map((all_class) => (
                <Singleclass singleclass={all_class} key="{allclasses[0].id}" />
            ))}
        
            </div>
            </div>
        </section>  
        </>
    )
}

export default Category

export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {categoryid } = params;
    const res = await fetch(`https://gyanias.herokuapp.com/api/${categoryid}`);
    const datas = await res.json()
    //console.log(datas) 
    return {
        props: {
            allclasses: datas,
            categoryid
        }
    }

}
