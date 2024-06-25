import React from 'react'

function Button(props){
    return (
      <button onClick={props.btm_click}>{props.btm_txt}</button>
    )
  }

export default Button