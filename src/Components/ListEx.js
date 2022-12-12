import React from 'react'

export default function ListEx() {
    const cars=["nano","800","breeza"]
    let listcars=cars.map((i)=>i+" ");
    return (
      <h1>{listcars}</h1>
    )
}
