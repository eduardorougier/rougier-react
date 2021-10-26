import { useState } from "react";

function ItemCount ({inicio, stock}) {

    const [contador, setContador] = useState(inicio);

    const crece = () => {
        if(contador >= stock) {
            alert ("Solo tenemos " + stock + " unidades del producto que elegiste!")
        } else {
            setContador(contador + 1)
        }
        
    }

    const decrece = () => {
        if(contador <= inicio) {
            alert ("No podés comprar menos de " + inicio + " producto!")
        } else {
            setContador(contador - 1) 
        }
        
    }

    const comprar = () => {
        alert ("Gracias por tu compra")
    }

    return (
        <div>
            <button onClick={decrece}>-</button>
            <h2>{contador}</h2>
            <button onClick={crece}>+</button>
            <br />
            <button onClick={comprar}>COMPRAR</button>
        </div>
    )

}

export default ItemCount