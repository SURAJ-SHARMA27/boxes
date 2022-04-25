import React from 'react'
import card1 from '../imgs/card1.png'
import star from "../imgs/Star.png"
const Cardpro = (props) => {
let badgeText
if(props.open===0){
  badgeText="SOLD OUT"
}
else if(props.loc==="online"){
  badgeText="ONLINE"
}
  return (
      <>
    <div className='card'>
      {badgeText && <div className="badge">{badgeText}</div>}
    <img src={props.sr} className="card-image"/>
    <div className='card-stats'>
     <img className='card-star' src={star}/>
     <span >{props.rating} </span>
     <span  className='gray'>({props.review})  - </span>
     <span className='gray'>{props.country}</span>
     </div>
     <p className='headi'>{props.heading}</p>
     <p>Buy at  <span className='bold'>{props.rate}</span></p>
</div>
</>
  )
}

export default Cardpro