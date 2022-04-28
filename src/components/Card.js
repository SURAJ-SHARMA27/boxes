import React from 'react'
import img from "../imgs/chand.jpg"
const Card = (props) => {
  return (
   <div className='car'>
     <div className='cards'>
     <img className="img" src={props.sr}/>
     <p><span className='loc'>{props.country}</span><span className='part'>View on Google Maps</span></p>
     
     
    </div>
    <div className="name">
    <h1>{props.name}</h1>
    <p className='date'>{props.date}</p>
    <p className='desc'>{props.desc}</p>
    </div>
    </div>
  )
}

export default Card