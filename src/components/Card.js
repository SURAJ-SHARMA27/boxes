import React from 'react'
import Cardp from './Cardpro'
 import data from "../data"
const Card = () => {
  const cards=data.map(item=>{
    return(
      <Cardp className="cards" 
      key={item.id}
      open={item.open}
sr={item.sr} 
heading={item.heading}
rating={item.rating}
review={item.review}
country={item.country}
loc={item.location}
rate={item.rate}>
  </Cardp>
    )
  })
  return (
<>
<div className="int">
{cards}

{/* <Cardp className="cards" 
sr="../imgs/watch.jpg" 
heading="MEGALITH Mens Watches Chronograph Waterproof Watch"
rating="4.5"
review="8267"
country="INDIA"
rate="$987"/>
<Cardp className="cards" 
sr="../imgs/watch2.jpeg" 
heading="Curren 50mm Big Dial Watches Men Luxury Brand Unique Sport Wristwatch Men "
rating="4.6"
review="2267"
country="UAE"
rate="$869"/>
<Cardp className="cards" 
sr="../imgs/watch3.jpg" 
heading="Luxury Male Elegant Ultra Thin Watch Men Business Stainless Steel Mesh Quartz "
rating="4.1"
review="5267"
country="USA"
rate="$690"/>
<Cardp className="cards" 
sr="../imgs/watch4.jpg" 
heading="China Kademan Vogue Leather Strap Quartz "
rating="4.4"
review="4267"
country="CHINA"
rate="$893"/>

<Cardp className="cards" 
sr="../imgs/watch.jpg" 
heading="MEGALITH Mens Watches Chronograph Waterproof Watch"
rating="4.5"
review="8267"
country="INDIA"
rate="$987"/> */}
</div>

</>
  )
}

export default Card