import Image from 'next/image'
import Link from 'next/link'
var moment = require('moment');
const Syllabus = ({mcqs})=>{
    return(
      <>

      <Link href={`/student/syllabuses/syllabusdetails/${mcqs._id}`} passHref>
    <div className="col-md-6 col-lg-3 row-item">
        <div className="wrapper">
        <h4 className="mbr-fonts-style align-center "> <b>
          {mcqs.course.course_name}
        </b></h4>
        <h5 className="mbr-fonts-style mbr-card-title align-center display-7"> {mcqs.syllabus_name} <br/> {moment(mcqs.created_at).format('MM Do')}</h5>  
        </div>
       
    </div>
    </Link>
    </>
    )
}

export default Syllabus