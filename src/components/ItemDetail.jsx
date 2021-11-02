
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

// import React from 'react' 

// const ItemDetail = (props) => {
//     return (
//         <div>
//              <label>
//                 <h2>Detalles: </h2>{props.prod.name}
//             </label>
//             <label>
//                 <h3>Precio</h3>{props.prod.price}
//             </label>
//             <label>
//                 {props.prod.descripcion}
//             </label>
//         </div>
//     )
// }

// export default ItemDetail