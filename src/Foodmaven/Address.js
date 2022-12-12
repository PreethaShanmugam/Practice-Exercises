
import React from 'react'
import './Address.css';
export default function Address() {
  return (
    <div>
    <br></br>
    <h2 id='abc'>Shipping Address </h2>
    <label className='ad'><b>DoorNo/Street: </b> </label>
    <input type="text" id="address" align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <label className='ci'><b>City:</b></label>
    <input type="text" id="city"></input>
    <br></br>
    <br></br>
    <label className='st'><b>State:</b></label>
    <input type="text" id="state"></input>
    <br></br>
    <label className='pi'><b>Pincode:</b></label>
    <input type="text" id="pincode"></input>
    <br></br>
    <br></br>
    <label className='cn'><b>Contact number:</b> </label>
    <input  type="text" id="number" align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <button id='br'>Procced to pay</button>
    </div>
  )
}
