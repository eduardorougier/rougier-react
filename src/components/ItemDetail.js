import React, { useState } from "react";
import ItemCount from "./ItemCount";



const ItemDetail = (prod) => {

    const [ count, setCount] = useState (0)
    //Función al apretar Agregar
    // const clickOnAdd = (total) => {
    //     alert(`La cantidad agregada es de ${total} unidades.`)
    //     setCount(total)
    // }
    // console.log(count)

    const onAdd = (cant) => {
        setCount(cant)
    }
    console.log(count)
    return (
        <div key={prod.prod.id} className="detalle-item">
            <h2>Detalle del Item: {prod.prod.title}</h2>
            <div>
                <img src={prod.prod.foto} alt='imagen' />
            </div>
            <div>
                <p>{prod.prod.description}</p>
            </div>

            <ItemCount stock={5} initial={1} onAdd={onAdd} />

        </div>
    )
}

export default ItemDetail