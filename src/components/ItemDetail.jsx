import React from "react";

const ItemDetail = (prod) => {

    return(
        <div>
            <h2>Detalle del Item: {prod.prod.title}</h2>
            <div>
                <img src={prod.prod.foto} alt='imagen' />
            </div>
            <div>
                ${prod.prod.precio}
            </div>
            <div>
                <p>{prod.prod.description}</p>
            </div>

        </div>
    )
}

export default ItemDetail 
