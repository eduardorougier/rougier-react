import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import getItem from "./getItem";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})

    useEffect(() => {
        getItem
            .then((res) => {
                console.log('Llamada a api')
                setProd(res)
            })
            .finally(() => console.log('Esto se ejecuta'))

        console.log(prod)

    },)    

    return (
        <>
        <ItemDetail prod={prod}/>
        </>
    )
}

export default ItemDetailContainer 

