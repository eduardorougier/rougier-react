import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import getItem from "./getItem";
import ItemDetail from "./ItemDetail";
import getFetch from "./getFetch";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { id } = useParams()

    useEffect(() => {

        if (id) {
            getFetch
            .then((res) => {
                console.log('Llamada a api')
                setProd(res.find(prod => parseInt(prod.id)===parseInt(id)))
            })
            .finally(() => console.log('Esto se ejecuta'))

        console.log(prod)
        }
    
    },)    

    return (
        <>
        {prod ? <ItemDetail prod={prod}/> : <h1>Hola</h1>}
        </>
    )
}

export default ItemDetailContainer