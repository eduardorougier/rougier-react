import { useState } from "react";

function ItemCount ({initial, stock, onAdd }) {

    const [contador, setContador] = useState(initial);

    const crece = () => {
        if(contador >= stock) {
            alert ("Solo tenemos " + stock + " unidades del producto que elegiste!")
        } else {
            setContador(contador + 1)
        }
        
    }

    const decrece = () => {
        if(contador <= initial) {
            alert ("No podés comprar menos de " + initial + " producto!")
        } else {
            setContador(contador - 1) 
        }
        
    }

    return (
        <div>
            <button onClick={decrece}>-</button>
            <h2>{contador}</h2>
            <button onClick={crece}>+</button>
            <br />
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    )

}

export default ItemCount