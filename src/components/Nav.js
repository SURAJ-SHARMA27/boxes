import React from 'react'
import navimg from "../imgs/img.png"
const Nav = () => {
  return (
    <nav>
        <img className="nav-img" src={navimg}/>
        <p className="nav-head">My Travel Journal</p>
    </nav>
  )
}

export default Nav