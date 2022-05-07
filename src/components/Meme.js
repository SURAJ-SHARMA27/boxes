import React from 'react'
import memesData from '../data'

function Meme() {
  // const [memeImage,setMemeImage]=React.useState("");
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg"
  })
  const [allMemeImages,setAllMemeimages]=React.useState(memesData)
  
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url=memesArray[randomNumber].url
    setMeme(prev=>({
      ...prev,
      randomImage:url
    }))
  }

  return (

    <div className='main'>
        <div className='form'>
            <input className='form-input' type='text'
            placeholder='Top text'/>
            <input className='form-input' type ='text'
            placeholder='Bottom text'/>
            <button className='form-button' onClick ={getMemeImage}>Get a new meme image </button>
        </div>
        <img src={meme.randomImage} className="memeimage"/>
        
    </div>
    
  )
}

export default Meme