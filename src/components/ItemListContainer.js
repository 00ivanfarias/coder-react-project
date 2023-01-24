import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  //const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const{id} = useParams();

  useEffect(() => {
    //const pedido = fetch("https://fakestoreapi.com/products")

    //pedido
    //  .then((respuesta)=>{
    //    const productos = respuesta.json();
    //    return productos;
    //  })
    //  .then((productos)=>{
    //    setProductos(productos);
    //    setLoad(true);
    //  })
    //  .catch((error)=>{
    //    console.log(error)
    //  })
    const url = "https://fakestoreapi.com/products";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
      setProductos([])
      if(id===undefined){
        setProductos(resultado)
      }else{
        setProductos(resultado.filter((producto)=> producto.category === id))
      }
    })

  
  }, [id])
  

  return (
    <>
      {/* {load ? "Productos Cargados!!" : "Cargando Productos..."} */}
      <ItemList productos={productos}/>
    </>
  );
};

export default ItemListContainer;
