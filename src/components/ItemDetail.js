import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = (prod) => {

    const [ count, setCount] = useState (0)
    
    const [cambiarBoton, setCambiarBoton] = useState(false);

    const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
    console.log(cartList, 'YO SOY CARTLIST');
    console.log(mostrarListado, 'YO SOY MOSTRAR LISTADO');
    console.log(agregarAlCarrito, 'YO SOY AGREGAR AL CARRITO');

    const onAdd = (cant) => {
        setCount(cant)
        setCambiarBoton(true);
        agregarAlCarrito({prod, cantidad: cant})
        console.log(cartList, 'SOY CARTLIST en funcion ON ADD')
    }
    console.log(count)
    return (
        <div key={prod.prod.id} className="detalle-item">
            <h2>Detalle del Item: {prod.prod.title}</h2>
            <div>
                <img src={prod.prod.pictureUrl} alt='imagen' />
            </div>
            <div>
                <p>{prod.prod.description}</p>
                <p>{prod.prod.price}</p>
                
            </div>

            <ItemCount stock={5} initial={1} onAdd={onAdd} />

        </div>
    )
}

export default ItemDetail