import Image from 'next/image'
import Link from 'next/link'
var moment = require('moment');
const Syllabus = ({syllabus})=>{
    return(
      <>

      <Link href={`/student/syllabuses/syllabusdetails/${syllabus._id}`} passHref>
    <div className="col-md-6 col-lg-3 row-item">
        <div className="wrapper">
        <h4 className="mbr-fonts-style align-center "> 
          {syllabus.course.course_name}
        </h4>
        <h5 className="mbr-fonts-style mbr-card-title align-center display-7"> {syllabus.syllabus_name} <br/> {moment(syllabus.created_at).format('MM Do')}</h5>  
        </div>
       
    </div>
    </Link>
    </>
    )
}

export default Syllabus