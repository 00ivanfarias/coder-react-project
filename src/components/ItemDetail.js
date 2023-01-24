import React from 'react'

const ItemDetail = ({productos}) => {
  return (
    <div>
        <h3>Detalle de: {productos.title}</h3>
        <img src={productos.image} alt={productos.title}/>
        <p>{"El precio es de: $" + productos.price}</p>
    </div>
  )
}

export default ItemDetail