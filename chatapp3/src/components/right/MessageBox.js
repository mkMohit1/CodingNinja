import React, { useEffect, useState } from 'react'
import RightChatBubble from './RightChatBubble'
import { Row } from 'react-bootstrap'
import LeftChatBubble from './LeftChatBubble'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage, contactSelector } from '../../reducers/ContextReducer'
import { useParams } from 'react-router-dom'
import MessageInput from './MessageInput'

// message box is in which we call leftchatbubble or rightchatbubble , we have also created many functions for working let's see below 
const MessageBox = () => {
    // here we have initilize two states 
   const [chat,setChat] = useState([]);
   const [length , setLength] = useState();

   // here we initilize dispatch for calling funcitons
   const dispatch = useDispatch();

   // here we use useParams() and parseInt because we use id and convert it to integer so that we can use it in path
  const contactsState = useSelector(contactSelector);
  const {id} = useParams();
  const uid = parseInt(id);

  // here, if we found u.id is equals to uid so we take the chatlog for that id so that we can use messages data in message box 
  const user = contactsState.find((u)=> u.id===uid)
  const messages = user.chatlog;

  // here is useEffect function to set my chat and length because when I send msg the length will be increase
useEffect(()=>{
      setChat(messages);
      setLength(messages.length);
},[dispatch,messages])

// now, here is the timing function when I send msg so it will show the time 
  var time;
    var hours;
    var minutes;

    function currentTime() {
        var currentDate = new Date();
        hours = currentDate.getHours();
        hours = hours % 12 || 12;
        hours = appendZero(hours);

        minutes = appendZero(currentDate.getMinutes());
        var seconds = appendZero(currentDate.getSeconds());

        const am = "AM";
        const pm = "PM";

        const timeZone = hours <= 12 ? am : pm;

        time = `${hours}:${minutes}:${seconds} ${timeZone}`;
    }

    function appendZero(time) {
        if(time<10 && time.length !== 2) {
            return "0"+time;
        }
        return time;
    }

    setInterval(currentTime, 1000);

    let updatedMessages = (message) => {
        let object = {
            text: message,
            timestamp: time,
            sender: "me",
            message_id: length +1,
        }
        dispatch(addMessage(object, user.id));
        setLength(object.message_id);
        setChat([...chat, object]);
    }
  return (
       <Row>
           <Row style={{height:"75vh"}} className='overflow-y-scroll'>
              {chat.map((msg)=>(
                    msg.sender === 'me' ? 
                    <RightChatBubble key={msg.message_id} message={msg}/> : <LeftChatBubble key={msg.message_id} message={msg} image={user.image}/>
              ))}
           </Row>
           <MessageInput newmsg={updatedMessages} user={user}/>
       </Row>
  )
}

export default MessageBox
