import react, { useState } from 'react'
// {usestate ---called as hooks}
// import PropTypes from 'prop-types'
import React from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
   // how to update text ---just go to textarea tag and declare the text 
  // setText("correct way to set text")
  const handleOnchange=(event) =>{
    // console.log('')
   setText(event.target.value) //from this we can write in text area
  }
  const handleUpclick=()=>{
    // console.log("upper case was clicked " + text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("upperCase clicked","success")  // from this we can show alert in textform
  }
  const handlelowclick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    
  }
  const handlereplaceclick=()=>{
    let newText=text.replace('ashish' ,'akash')
    setText(newText)
  } 
  
    return (
      <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.hedding} </h1>
<div className="mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
  <textarea className="form-control" value ={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'black':'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
 <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convert into upperclass  </button>
 <button className="btn btn-primary mx-2" onClick={handlelowclick} >Convert into lowerclass </button>
 <button className="btn btn-primary mx-2" onClick={handlereplaceclick} >Convert word </button>
      

  <div className="container">
    <h2>text summary </h2>
    <p>{text.split(" ").length}words and {text.length}character</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <p>{text}</p>

  </div>
  </div> 
  </>       
    )
}
