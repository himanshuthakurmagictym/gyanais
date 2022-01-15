import React from 'react'
import Link from 'next/link'
function sidebar({categoryid}) {
    return (
        <>
            <div className="left_navigation">
                               
                               <ul>
                                   <Link href={`/student/category/${categoryid}`}><li>Course</li></Link>
                                   <Link href={`/student/notes/${categoryid}`}><li>Notes</li></Link>
                                   <Link href={`/student/freelive/${categoryid}`}><li>Free Live Classes</li></Link>
                                   <Link href={`/student/syllabus/${categoryid}`}><li>Syllabus</li></Link>
                                   {/* <a href="/student/profile"><li>Subscription</li> </a>  */}
                               </ul>

                              
                       </div> 
        </>
    )
}

export default sidebar
