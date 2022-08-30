import React from 'react'

const EachImage = ({ url, alt }) =>{
  return (
    <div className='imageContainer'>
      <img src={url} alt={alt}></img>
    </div>
  )
}

export default EachImage