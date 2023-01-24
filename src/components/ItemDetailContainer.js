import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail  from './ItemDetail';

const ItemDetailContainer = (producto) => {
  const[productos,setProductos] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=>{
      setProductos(resultado)
    })
  },[id]);

  return(
      <div>
        <ItemDetail productos={productos}/>
      </div>
  )
}

export default ItemDetailContainer