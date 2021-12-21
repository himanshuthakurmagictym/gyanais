

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
                                    <div classname="heading">
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
                                    <div classname="">
                                   typing
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