import { useState } from "react";

 function ItemListContainer(props){

  let[counter, setCounter]=useState(0);

  const handleClick = () => {
    setCounter(counter+1);
  };

  return (<>
    {props.greeting}
    <p>Contador:{counter}</p>
    <button onClick={handleClick}>Sumar</button>
    </>
  )
}

export default ItemListContainer