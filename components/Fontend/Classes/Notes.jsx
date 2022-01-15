import Image from 'next/image'
import Link from 'next/link'
var moment = require('moment');
const Notes = ({Notes})=>{
    return(
      <>

      <Link href={`/student/notes/note/${Notes._id}`} passHref>
    <div className="col-md-6 col-lg-3 row-item">
        <div className="wrapper">
        <h4 className="mbr-fonts-style align-center "> {Notes.course_name} </h4>
        <h5 className="mbr-fonts-style mbr-card-title align-center display-7"> {Notes.notes_name} <br/> {moment(Notes.created_at).format('MM Do')}</h5>  
        </div>
       
    </div>
    </Link>
    </>
    )
}

export default Notes