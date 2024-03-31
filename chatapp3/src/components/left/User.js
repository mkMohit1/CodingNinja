import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

// here are the list of users so that we can select any user and chat with them 
const User = ({u}) => { // we have a prop u in which contacts details 
  const chat = u.chatlog;   // u.chatlog means it now chat have all the data of chatlog like msg, timestamp
  let len = chat.length; // this is the length of chat
  const noMsg={  // this is function when no msg in chatbox so no msg will appear
      text: "no msg",
  }
  return (
      <Row className='d-flex align-items-center mt-4 border-bottom border-dark'>
         <Col sm={2}>
           <Image src={u.image} roundedCircle height="45px" width="45px"/>
         </Col>
         <Col className='lh-1'>
                <h4>{u.name}</h4>
                <p>{len>0 ? chat[len-1].text : noMsg.text}</p>
         </Col>   
      </Row>
  )
}

export default User
