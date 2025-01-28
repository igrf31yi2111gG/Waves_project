import React from "react";
import { useEffect } from "react";
import Cards from './Cards.js'
import Header from './Header.js'
import Main from './Main.js'

function App() {

  useEffect(() => {
    fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(json => console.log(json))
}, []);
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cards/>
    </div>
  );
}

export default App;
