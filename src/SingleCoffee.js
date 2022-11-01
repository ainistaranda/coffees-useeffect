import { useState } from "react";

export default function SingleCoffee({entireObject}) {
    const [favorite,setFavorite] = useState(false)
    
    
//   const exampleProps = {
//     name: "Black American Coffee",
//     price: "$$$$",
//     description: "delish",
//   };
//   const description = exampleProps.description
//   const name = exampleProps.name
//   const price = exampleProps.price

//   const {description, name, price} = exampleProps //destructuring

  // console.log('props here -->', name) // the entire props object
  return (
    <div className="menu-items__item" style={{ backgroundColor: favorite ? 'red' : 'white'}}>
    
      <img
        src={entireObject.image}
        alt="pictures of each coffee type"
      ></img>
      <div className="coffee-container">
        <h3>{entireObject.title}</h3>
        <span>Price: {entireObject.price}</span>
        <p>{entireObject.description}</p>
        <button onClick={() => setFavorite(true)}>Favorite</button>
       
      </div>
    </div>
  );
}
