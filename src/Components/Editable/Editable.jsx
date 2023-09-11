import { Button } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./Editable.css";

function Editable(props) {
    const [showForm , setShowForm] = useState(false)
    const [inputValue, setInputValue] = useState(props.default || "")
    console.log(props.text)


  return (
    <div className='editable'>
   {
    showForm ? 
    <form className='editable_edit' 
    onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit && props.onSubmit(inputValue);
        setShowForm(false)
        setInputValue("")
    }}
    >
        <input type='text'
        defaultValue={props.text}
        placeholder={props.placeholder || "Enter item"} />
        <div className='editable_edit_footer'>
            <Button type='submit'>{props.buttonText || "Add"}</Button>
            <CloseIcon onClick={() => setShowForm(false)} />
        </div>
    </form>
    : <p className='editable_display' onClick={() => setShowForm(true)}>{props.text || "Add item"}</p>
   }
    
    
    </div>
  )
}

export default Editable