

import { useEffect } from "react";
import { useState } from "react";
import getFetch from "./getFetch";
import Item from "./Item"




const ItemList = (edu) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {
            console.log('llamada a api')
            setProduct(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

    console.log(product)

    return (
        <>
            { loading ? <h1>Cargando...</h1> :
                product.map((prod) => <Item prod={prod} />)
                                    
                                    
                             
            }
        </>
    )
}

export default ItemList