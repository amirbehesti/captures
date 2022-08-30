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
    if (prevSearch != query) {
      setPrevSearch(query);
      setBtnBack(query);

      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=${1}&format=json&nojsoncallback=1`
        )
        .then(response => {
          console.log(response);
          setImages(response.data.photos.photo);

          if (response.data.photos.pages > 10) {
            setPageLimit(10);
            setPageNumber(1);
          } else {
            setPageLimit(response.data.photos.pages);
            if (response.data.photos.pages > 1) {
              setPageNumber(response.data.photos.pages);
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
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=${pageNumber}&format=json&nojsoncallback=1`
        )
        .then(response => {
          console.log(response);
          setImages(response.data.photos.photo);
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