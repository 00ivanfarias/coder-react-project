import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    <article key={producto.id}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} />
      <p>{"$" + producto.price}</p>
      <Link className="article__link" to={"/item/"+producto.id }>Ver más</Link>
    </article>
  );
};

export default Item;

