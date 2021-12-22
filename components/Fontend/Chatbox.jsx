

const Chatbox = ()=>{
    return(
        <>
      <main>
          <div className="container-fuild">
              <div className="row">
                    <div className="col-md-12">
                    <div className="chat-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading">
                                    Message
                                    </div>
                                     
                                </div>
                               
                            </div>
                        </div> 
                    </div>



                    <div className="chat-body">
                        <div className="container">
                            <div className=" row">
                                <div className="col-md-12">
                                <div className="chatbody">
                                    <div className="incoming_message">
                                        <h4>Rahul</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat earum provident</p>
                                    </div>

                                    <div className="outgoing_message">
                                        <h4>Shaam</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat earum provident</p>
                                    </div>
                                   </div>  
                                </div>
                               
                            </div>
                        </div> 
                    </div>


                    <div className="chat-footer">
                       
                           
                                    <div className="chatfooter">
                                    <form> 
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 col-sx-12 chatleft">
                                           
                                            <input type="text" className="commenttype" placeholder="Type your comment here..." />
                                           
                                        </div>
                                        <div className="col-md-3 col-sx-12 chatleft" >
                                                <input type="submit" className="commentsend" value="send" />
                                        </div>
                                    </div>
                                    </div>
                                   
                                   </form>
                                    </div>
                                     
                              
                       
                    </div>


                    </div>
              </div>
              
          </div>
      </main>

        </>
    )
}

export default Chatbox