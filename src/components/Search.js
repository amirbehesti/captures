import React from 'react'
import { useParams } from 'react-router-dom';
import Content from './Content';

const Search = () => {
  const params = useParams();
  return (
    <>
      <Content topic={params.id} />
    </>
  )
}

export default Search