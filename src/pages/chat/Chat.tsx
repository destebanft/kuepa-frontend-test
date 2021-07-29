import socketIOClient from "socket.io-client";
import {useEffect, useState} from "react";

const socket = socketIOClient("http://localhost:9000");
const Chat =() =>{

  const [response, setResponse] = useState<string>("");
  const sendMessage = () =>{
    socket.emit("send message", "helloworld")
  }
  useEffect(() => {
    socket.on("load old msgs", data => {
      setResponse(data);
    });
  }, []);
  return (<div>
    <h1>Chat</h1>
    <p>{response}</p>
    <button onClick={sendMessage}>Send Message Socket</button>
  </div>)
}

export default Chat