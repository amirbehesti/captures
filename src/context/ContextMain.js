import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../access/key";
export const contextMain = createContext();

const ContextProvider = props => { 
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prevSearch, setPrevSearch] = useState('');
  const [btnBack, setBtnBack] = useState('');
  const [pageLimit, setPageLimit] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const searchItems = (query, pageNumber) => {
    setLoading(true);
    if (prevSearch !== query) {
      setPrevSearch(query);
      setBtnBack(query);

      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=${pageNumber}&query=${query}&per_page=24&content_filter=high`
        )
        .then(response => {
          console.log(response);
          setImages(response.data.results);

          if (response.data.total_pages > 10) {
            setPageLimit(10);
            setPageNumber(1);
          } else {
            setPageLimit(response.data.total_pages);
            if (response.data.total_pages > 1) {
              setPageNumber(1);
            }
          }
          setLoading(false);

        })
        .catch(error => {
          console.log(
            "An error encountered when fetching and parsing data",
            error
          );
        });
    } else {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=${pageNumber}&query=${query}&per_page=24&content_filter=high`
        )
        .then(response => {
          console.log(response);
          setImages(response.data.results);
          setLoading(false);
        })
        .catch(error => {
          console.log(
            "An error encountered when fetching and parsing data",
            error
          );
        });
    }
  };


  return (
    <contextMain.Provider value={{ images, loading, btnBack, pageNumber, pageLimit, setPageNumber, searchItems }}>
      {props.children}
    </contextMain.Provider>
  );

};

export default ContextProvider;