import React from 'react'

function leftmenu() {
  return (
 <>

            <div className="vertical-menu">

                <div data-simplebar className="h-100">

                    
                    <div id="sidebar-menu">
                        
                        <ul className="metismenu list-unstyled" id="side-menu">

                            <li>
                                <a href="/admin/dashboard" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/adddemo" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Add Demos</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/allorders" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Orders</span>
                                </a>
                            </li>
                           

                            <li>
                                <a href="/admin/allstudents" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Students</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/allteachers" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Teachers</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allcourse" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Course</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allvideostream" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Free Classes</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/allrecordedvideo" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>All Pro Classes</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/addcategory" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Add Category</span>
                                </a>
                            </li>

                            <li>
                                <a href="/admin/addtopics" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Add Topics</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/addtargetexam" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>add Target Exam</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/addpaymentplan" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Payment Plan(Student)</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/addaffair" className="waves-effect">
                                <i className="ti-calendar"></i>
                                    <span>Add Current Affairs</span>
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