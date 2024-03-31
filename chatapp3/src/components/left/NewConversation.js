import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";

const NewConversation = ({handleClick}) => {
  return (
    // this is the component in which we are adding new conversation by clickin on + (plus) icon so that we can add new chat or conversation by selecting our contacts 
     <Col sm={7} className='d-flex align-items-center justify-content-end' onClick={handleClick}>
        <Row>
                  <Col>
                      <p>New Conversation</p>
                  </Col>
                  <Col>
                      <AiOutlinePlus style={{cursor:"pointer"}}/>
                  </Col>
               </Row>
     </Col>
  )
}

export default NewConversation
