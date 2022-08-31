import React from 'react'

const EachImage = ({ url, alt }) =>{
  return (
    <div className='card'>
      <img className="card--image" src={url} alt={alt}></img>
    </div>
  )
}

export default EachImage