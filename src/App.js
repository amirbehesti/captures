import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/ContextMain';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import { useParams } from 'react-router-dom';
export const topics = ["cool-art", "wildlife", "mountain", "motivational", "flowers", "sky"];

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Content/>} topic="random"/>
          {
            topics && topics.map((topic, index) => {
              return (
                <Route key={index} path={`/${topic}`} element={<Content topic={topic} />} />
              )
            })
          }
           <Route path="/:id" element={<Search />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;