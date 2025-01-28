import logo_1 from './images__.jpg'

function Cards() {
    const cards = [{
      text:`Punta Monita
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      from $399 pp`,
      img:logo_1
    }];
  
    return <><Image cards={cards} /></>;
  }


   function Image ({cards}) {
    const listItems = cards.map(card =>
      <div> 
        <li>{card.text}</li> 
        <img
          src={card.img}
          alt="Lin Lanying"
        />
      </div>
  
    );
    return listItems;
  }

 
  export default Cards;