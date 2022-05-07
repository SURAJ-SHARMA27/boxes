import React from 'react'

function Box (props) {
  // console.log(props.id)  
  //const[on,setOn]=React.useState(props.on)
    const styles={
        backgroundColor:props.on?"#222222":"transparent"
    }
    // function toggle(){
    //     setOn(prev=>!prev)
    // }
  return (
    <div style={styles} 
    onClick={()=>props.toggle(props.id)} 
    className='box'></div>
  )
}

export default Box