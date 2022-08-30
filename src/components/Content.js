import React, { useContext, useEffect, useState } from 'react';
import { contextMain } from '../context/ContextMain';
import ImageCards from './ImageCards';
import FadeLoader from "react-spinners/FadeLoader";


const Content = ({ topic }) => {

  const { images, loading, searchItems, pageLimit, pageNumber, setPageNumber } = useContext(contextMain);
  // const [currentPage, setCurrentPage] = useState(topic);

  useEffect(() => {
    searchItems(topic, pageNumber);
  }, [pageNumber, topic]);

  // useEffect(() => {
  //   if (currentPage != params.id) {
  //     setCurrentPage(params.id)
  //   }
  // })FFff

  return (
    <>
      <div className='container'>
        {loading ? <div className='loader'><FadeLoader color="#8614f8" size={180} /></div> : <ImageCards results={images} />}
      </div>

      <>
        {pageLimit >= 1 && (
          <div className='pages'>
            <button className="pageButton" onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber >= 2 ? false : true}>Prev</button>
            <span>Page: {pageNumber}</span>
            <button className="pageButton" onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber < pageLimit ? false : true}>Next</button>
          </div>
        )
        }
      </>
    </>
  )


}


export default Content