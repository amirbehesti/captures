import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/ContextMain';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import NotFound from './components/NotFound';
export const topics = ["illustration", "wildlife", "mountain", "motivational", "flowers", "sky"];

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Content  topic="nature-scenery"/>}/>
          {
            topics && topics.map((topic, index) => {
              return (
                <Route key={index} path={`/${topic}`} element={<Content topic={topic} />} />
              )
            })
          }
           <Route path="/:id" element={<Search />} />
           <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;