import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import getFetch from "./getFetch";
import Item from "./Item";

const ItemList = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            getFetch
                .then((res) => {
                    setProduct(res.filter(prod => prod.category=== id))
                })
                .finally(() => console.log('Esto se ejecuta si o si'))

            console.log(id)

        } else {
            getFetch
                .then((res) => {
                    setProduct(res)
                })
                .finally(() => console.log('Esto se ejecuta si o si'))

            console.log(id)

        }

    }, [id])

    return (
        <>
            {product.map((prod) => <Item prod={prod} />)}
        </>
    )
}

export default ItemList;