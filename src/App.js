import React, { useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import { contextMain } from './context/ContextMain';
import './App.css';
import Search from './components/Search';
import NotFound from './components/NotFound';
import ImageDetail from './components/ImageDetail';


export const topics = ["illustration", "wildlife", "mountain", "motivational", "flowers", "sky"];

const App = () => {
  const {selectedImg, setSelectedImg } = useContext(contextMain);

  return (
      <div className="App">
      {selectedImg && <ImageDetail selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
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
           <Route path="/search/:id" element={<Search />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;