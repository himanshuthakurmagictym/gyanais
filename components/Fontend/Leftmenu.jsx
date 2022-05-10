import React from 'react'

function leftmenu() {
  return (
 <>

            <div class="vertical-menu">

                <div data-simplebar class="h-100">

                    
                    <div id="sidebar-menu">
                        
                        <ul class="metismenu list-unstyled" id="side-menu">

                        <li>
                                <a href="/admin/dashboard" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                           

                            <li>
                                <a href="/admin/allstudents" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>All Students</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/allteachers" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>All Teachers</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allcourse" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>All Course</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allvideostream" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>All live Streams</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allrecordedvideo" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>All Recorded</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/addcategory" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>Add Category</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/addgoal" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>Add Goal</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/addtargetexam" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>Target Exam</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/addpaymentplan" class="waves-effect">
                                <i class="ti-calendar"></i>
                                    <span>Payment Plan(Student)</span>
                                </a>
                            </li>

                           

                            {/* <li>
                                <a href="javascript: void(0);" class="has-arrow waves-effect">
                                    <i class="ti-email"></i>
                                    <span>Email</span>
                                </a>
                                <ul class="sub-menu" aria-expanded="false">
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Email Read</a></li>
                                    <li><a href="email-compose.html">Email Compose</a></li>
                                </ul>
                            </li> */}



                        </ul>
                    </div>
                  
                </div>
            </div>
          

 </>
  )
}

export default leftmenu