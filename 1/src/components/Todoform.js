import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";

export default class Todoform extends Component {
  render() {
    const{handleInput,handleSubmit,value}=this.props
    
    return (
       
      <div className=' form-container '>
           <Form onSubmit={handleSubmit} className=" my-5 d-flex align-items-center ">
                <Form.Group  className="flex-grow-1" >
                <Form.Control onChange={handleInput} 
                 type="text " 
                 placeholder='اضافه کردن کار جدید' 
                 value={value}
                 className="bg-secondary text-white form-input"
                 />
                </Form.Group>  
                <Button type="submit"
                 className='fw-bold px-5 mx-1 '
                 variant="primary" 
                 disabled={value.text?false:true}
                >اضافه کردن</Button>
           </Form>
           
        </div>
    )
  }
}
