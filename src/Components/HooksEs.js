import React,{useState} from 'react'

function HooksEs() {
    const[count,SetCount]=useState(1)
    let inc=()=>{
    SetCount(count+1)
    }
  return (
    <div>
    {count}<br />
    <button onClick={inc}>ClickMe</button>
    </div>
  )
}

export default HooksEs
