import React,{ useContext} from 'react';
import { contextMain } from '../context/ContextMain';

const EachImage = ({ url, alt,fullView }) =>{

  const {setSelectedImg} = useContext(contextMain);

  const handleClick = ()=>{
    setSelectedImg(fullView);
  }

  return (
    <div className='card'>
      <img onClick={handleClick} className="card--image" src={url} alt={alt}></img>
    </div>
  )
}

export default EachImage