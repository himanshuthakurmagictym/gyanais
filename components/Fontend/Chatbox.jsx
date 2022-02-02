
import {useEffect, useState, useRef} from "react";
import APIs from '../../config.js';
import {useAppContext} from '../Fontend/Layout'
const Chatbox = ({socket, userid, roomid})=>{

const[sentmessage, setsendmessage] = useState("")
const[message, setMessage] = useState([])
const isuser = useAppContext();
const bottomRef = useRef();

const[users, setusers] = useState([])
//    useEffect(()=>{
//     setuserdetail(isuser)
//    },[isuser])
  // Message from server
  useEffect(() => {
socket?.emit('getmessage', roomid);
},[]);

useEffect(() => {
socket?.on('message', (msg) => {
     console.log(`inner${msg}`);
    setMessage(msg);
    // socket?.emit('sendMessage', "welcome");
  });
},[socket]);

  console.log(`outer${message}`)
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);


 const handleSubmitChat = (e)=>{
     e.preventDefault();
    //const sendData = JSON.stringify({message:message, userid:userid})
    // console.log(sendData);
    let msg = sentmessage;
        msg = msg.trim();
        if (!msg) {
            return false;
        }
  // Emit message to server
  socket?.emit('sendMessage', msg);
 }   

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



                    <div className="chat-body" ref={bottomRef}>
                        <div className="container">
                            <div className=" row">
                                <div className="col-md-12">
                                <div className="chatbody" >
                                    {/* {message.map((message) =>(

                                    <div className="incoming_message" key={message._id}>
                                    <h4>{message.firstname}</h4>
                                    <p>{message.message}</p>
                                    </div>

                                    ))} */}
                                    
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
                                    <form onSubmit={handleSubmitChat}> 
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 col-sx-12 chatleft">
                                           
                                            <input type="text" onChange={(e)=>{setsendmessage(e.target.value)}}className="commenttype" placeholder="Type your comment here..." />
                                           
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