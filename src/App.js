import React, { useState } from 'react';
import TopBar from './components/AppBar/TopBar';
import Content from './views/Content/Content';
import ImageContext from './contexts/ImageContext';
import UrlContext from './contexts/UrlContext';
import PokeContext from './contexts/PokeContext';
import LanguageContext from './contexts/LanguageContext';

function App() {
  const [image, setImage] = useState('');
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=5');
  const [prevUrl, setPrevUrl] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [language, setLanguage] = useState(true);
  
  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ImageContext.Provider value={{ image, setImage }}>
          <UrlContext.Provider value={{ nextUrl, prevUrl, setNextUrl, setPrevUrl }}>
            <PokeContext.Provider value={{ currentPokemon, setCurrentPokemon }}>
              <TopBar />
              <Content />
            </PokeContext.Provider>
          </UrlContext.Provider>
        </ImageContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
