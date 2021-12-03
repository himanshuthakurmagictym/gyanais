import Image from 'next/image'
const Singleclass = ({singleclass})=>{
    return(
      <>
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      
        <Image src={`/assets/images/democlasses/${singleclass.image}`}  alt="class" width="200" height="100"/>
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {singleclass.title}</h4>
      <h5> {singleclass.lesson} • Started at {singleclass.date}</h5>
    </div>
       
  </div>
    </>
    )
}

export default Singleclass