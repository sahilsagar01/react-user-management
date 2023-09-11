import React from 'react'
import "./Modal.css"

function Modal(props) {
  return (
    <div 
    className='modal flex justify-center items-center'
    onClick={() => (props.onClose ? props.onClose(): "")}>
    <div 
    className='modal_content bg-white'
    onClick={(e) => e.stopPropagation()}>
        {props.children}
        </div>
    </div>
  )
}

export default Modal