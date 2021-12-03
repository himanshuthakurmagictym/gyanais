import Link from 'next/link'
import Image from 'next/image'
const Singleclass = ({singleclass})=>{
    return(
      <>
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
    <Link href={`/category/${singleclass.id}`} passHref>
      <div className="card-img pb-3 align-center">
  
        <Image src={`/assets/images/category/${singleclass.image}`} width="100" height="100" className="categoryimage" alt="category" />
      </div>
      </Link>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {singleclass.category_name}</h4>
      
    </div>
      
  </div>
    </>
    )
}

export default Singleclass