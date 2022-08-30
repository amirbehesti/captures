import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/ContextMain';
import Content from './components/Content';
import Header from './components/Header';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element = {<Content/>}/>
          <Route path="/:id" element={<Content />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
