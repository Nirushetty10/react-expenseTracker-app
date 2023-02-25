import React from 'react'

function Details(props) {
  return (
    <div className='card'>
        <h1>Name : {props.name}</h1>
        <h1>Phone : {props.phone}</h1>
        <h1>Place : {props.place}</h1>
    </div>
  )
}

export default Details