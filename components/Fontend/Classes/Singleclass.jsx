import Image from 'next/image'
import Link from 'next/link'
var moment = require('moment');
const Singleclass = ({singleclass})=>{
    return(
      <>
      <Link href={`/course/${singleclass.course_slug}`}>
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">
      
        <Image src={`/assets/images/course/${singleclass.course_image}`}  alt="class" width="200" height="100"/>
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {singleclass.course_name}</h4>
      <h5 className="mbr-fonts-style align-center "> {singleclass.course_laungauge} • Started at {moment(singleclass.created_at).format('MM Do')}</h5>
    </div>
       
  </div>
  </Link>
    </>
    )
}

export default Singleclass