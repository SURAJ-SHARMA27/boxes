import './App.css';
import React from 'react'
import data from "./data"
import Box from './components/Box';

function App() {

const [boxes,setBoxes]=React.useState(data)
function toggle(id){
  console.log("suraj")
  setBoxes(prev=>{
    return prev.map((elem)=>{
      return elem.id === id?{...elem,on:!elem.on}:elem
    })
  })
}
const squares=boxes.map(elem=>(
  <Box 
  key={elem.id} 
  id={elem.id}
  on={elem.on}
  toggle={toggle}
  ></Box> 
))
  return (
    <>
    {squares}
    
    </>
    
      
    
  )
}

export default App