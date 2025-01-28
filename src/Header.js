import './Header.css';

function Header() {

  return (
    <div className="Header">
    <span className="Logo">
     logo 
    </span>
    <section id="portfolio" className="grid-item">
      <span className='portfolio_text'>Our Portfolio</span>

      <a href="https://www.pryklad.com">Перейти на pryklad.com</a>
    </section>
    <span className="Button">
      Start a Journey
    </span>
    </div>
)
}

export default Header;