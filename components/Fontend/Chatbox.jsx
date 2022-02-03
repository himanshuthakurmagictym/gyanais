
import {useEffect, useState, useRef} from "react";
import APIs from '../../config.js';
import {useAppContext} from '../Fontend/Layout'
const Chatbox = ({socket, userid, roomid})=>{

const[sentmessage, setsendmessage] = useState("")

const[message, setMessage] = useState([])
const[newMessage, setnewMessage] = useState("")
const isuser = useAppContext();
const bottomRef = useRef();

const[users, setusers] = useState([])
//    useEffect(()=>{
//     setuserdetail(isuser)
//    },[isuser])
  // Message from server
  
  useEffect(() => {
     
    //  
    const getConversations = async () => {
        try {
            const allconversion = await fetch(`${APIs.base_url}messages/getMessages/${roomid}`);
            const conversion = await allconversion.json();
          setMessage(conversion.data);
        } catch (err) {
          console.log(err);
        }
      };
      getConversations();

},[isuser]);

useEffect(() => {
socket?.on('message', (allchat) => {
    //console.log(allchat)
    //setMessage(allchat);
    setMessage((prev) => [...prev, allchat]);
  });
},[socket]);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

// console.log(message)
 const handleSubmitChat = async(e)=>{
     e.preventDefault();

    let msg = sentmessage;
         msg = msg.trim();
        if (!msg) {
            return false;
        }
  const message = {
    userid: userid,
    message: msg,
    serverUserType:"real",
    roomid:roomid
  };

  try {

    // const URLS = APIs.base_url+"messages/postMessages";
    //     const sendData = JSON.stringify(message)
    //     const ress = await fetch(URLS, {
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //           },
    //         body:sendData,
    //     });
       
    //    const sendaconversion =  await ress.json();
       socket?.emit('sendMessage', {msg, userid});
        setsendmessage("")
        } catch (err) {
            console.log(err);
        }
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



                    <div className="chat-body" >
                        <div className="container">
                            <div className=" row">
                                <div className="col-md-12">
                                <div className="chatbody"  >
                                    
                                    {message.map((msg) =>(
                                    <div ref={bottomRef}>
                                        <div className={msg.suserid === userid ? "outgoing_message" : "incoming_message"} key={msg._id} >
                                        <h4>{msg.firstname} {msg.suserid}</h4>
                                        <p>{msg.message}</p>
                                        </div>
                                    </div>

                                    ))}
                                    
                                   
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
                                           
                                            <input type="text" value={sentmessage} onChange={(e)=>{setsendmessage(e.target.value)}}className="commenttype" placeholder="Type your comment here..." />
                                           
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