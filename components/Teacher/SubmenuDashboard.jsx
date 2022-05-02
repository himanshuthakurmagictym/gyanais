import React from 'react'

function SubmenuDashboard() {
  return (
             <>
    
                                <div className="left_navigation">
                                    <div className="">
                                        <ul>
                                            <a href="/teacher/mySchedule"><li>My Schedule</li></a>
                                            <a href="/teacher/allpluscourse"><li>My Plus Course</li></a>
                                            <a href="/teacher/addpluscourse"><li>Add Plus Course</li></a>  
                                            <a href="/teacher/addfreeclass"><li>Add Free Class </li></a>
                                            <a href="/teacher/addplusclass"><li>Add paid Class</li></a>
                                            <a href="/teacher/allNotes"><li>All Notes</li></a>
                                            <a href="/teacher/addNotes"><li>Add Notes</li></a>
                                            <a href="/teacher/addsyllabus"><li>Add Syllabus</li> </a>
                                            <a href="/teacher/addMCQ"><li>Upload MCQ</li></a> 
                                            {/* <a href="/student/profile"><li>Subscription</li> </a>  */}
                                        </ul>

                                    </div>     
                                </div>
                         
             </>
  )
}

export default SubmenuDashboard