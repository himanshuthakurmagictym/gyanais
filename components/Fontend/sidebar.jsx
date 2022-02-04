import React from 'react'
import Link from 'next/link'
function sidebar({categoryid}) {
    return (
        <>
            <div className="left_navigation">
                               
                               <ul>
                                   <Link href={`/student/category/${categoryid}`} passHref><li className='cursorlink'>Course</li></Link>
                                   <Link href={`/student/notes/${categoryid}`} passHref><li className='cursorlink'>Notes</li></Link>
                                   <Link href={`/student/freelive/${categoryid}`} passHref><li className='cursorlink'>Free Live Classes</li></Link>
                                   <Link href={`/student/syllabuses/${categoryid}`} passHref><li className='cursorlink'>Syllabus</li></Link>
                                   <Link href={`/student/mcqs/${categoryid}`} passHref><li className='cursorlink'>MCQ Practice</li></Link>
                                   {/* <a href="/student/profile"><li>Subscription</li> </a>  */}
                               </ul>

                              
                       </div> 
        </>
    )
}

export default sidebar
