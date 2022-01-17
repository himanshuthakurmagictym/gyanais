import Image from 'next/image'
import Link from 'next/link'
var moment = require('moment');
const Notes = ({notes})=>{
    return(
      <>

      <Link href={`/student/notes/notedetails/${notes._id}`} passHref>
    <div className="col-md-6 col-lg-3 row-item">
        <div className="wrapper">
        <h4 className="mbr-fonts-style align-center "> <b>
          {notes.course.course_name}
        </b></h4>
        <h5 className="mbr-fonts-style mbr-card-title align-center display-7"> {notes.notes_name} <br/> {moment(notes.created_at).format('MM Do')}</h5>  
        </div>
       
    </div>
    </Link>
    </>
    )
}

export default Notes