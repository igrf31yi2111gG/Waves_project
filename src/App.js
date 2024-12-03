import React from "react";

export function Header() {
  return (
    <div>
    <span className="Logo">
     logo 
    </span>
    <section id="portfolio" class="grid-item">
      <h2>Our Portfolio</h2>
      <div class="portfolio-item">
      <a href="https://www.pryklad.com">Перейти на pryklad.com</a>
      </div>
    </section>
    </div>
  
    
    
  )
}


function App() {
  return (
    <div className="App">
      <Header
      
      />
    </div>
  );
}

export default App;
