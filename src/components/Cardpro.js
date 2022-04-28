import React from 'react'
import data from "../data"
import Cardp from "./Card"
const Cardpro = () => {
    const cards=data.map(item=>{
      return(
          <Cardp
          key={item.id}
          name={item.name}
          sr={item.sr}
          date={item.date}
          desc={item.desc}
          country={item.country}
          
          
          >
              </Cardp>
      )
    })
  return (
    <>
    {cards}
    </>
  )
}

export default Cardpro