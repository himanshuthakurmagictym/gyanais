import Image from 'next/image'
import Link from 'next/link'
import APIs from '../../../config.js';
var moment = require('moment');
const Singleclass = ({singleclass})=>{
    return(
      <>

      <Link href={`/student/course/${singleclass.course_slug}`} passHref>
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">

        <Image alt="sdfsd" height="200" width="200" src={`${APIs.base_url_home}${singleclass.course_image?.replace(/\\/g,'\/')}`} />


        {singleclass.course_image?
         <Image src={`${APIs.base_url_home}${singleclass.course_image}`}  alt="class" width="200" height="100"/>
        :<Image src={`/assets/images/course/1.jpg`}  alt="class" width="200" height="100"/>}
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {singleclass.course_name}</h4>
      <h5 className="mbr-fonts-style align-center ">
         {/* {singleclass.course_laungauge}  */}
      <br/>• Started at {moment(singleclass.created_at).format('MM Do')}</h5>
    </div>
       
  </div>
  </Link>
    </>
    )
}

export default Singleclass