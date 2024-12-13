import React from "react";
import { useEffect } from "react";

export function Header() {

  return (
  
    <div>
    <div className="Header">
    <span className="Logo">
     logo 
    </span>
    <section id="portfolio" class="grid-item">
      <h2>Our Portfolio</h2>
      <div class="portfolio-item">
      <a href="https://www.pryklad.com">Перейти на pryklad.com</a>
      </div>
    </section>
    <span className="Button">start a Journey
    </span>
    </div>
    <div>
    <h2 className="text">
      Discover the water
    </h2>
    <span>
      From pristine waters to magestic
      forests...we have it all
    </span>
    <sapn>
      Saltwater Fishing
      love fishing? Witch some of the best spote wvailable year-round 
      from costline to the ceep sea you won't be short for choice
      Marine Snorkelling
      Go deep sea diving in some of the most pristine waters on the planet.  
    </sapn>
    </div>
    </div>
    
    
  )
}


function App() {

  useEffect(() => {
    fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(json => console.log(json))
}, []);
  
  return (
    <div className="App">
      <Header
      
      />
    </div>
  );
}

export default App;
