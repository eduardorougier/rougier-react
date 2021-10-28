import { useEffect } from "react";
import { useState } from "react";
import getFetch from "./Item";
import ItemCount from "./ItemCount";



const ItemList = () => {
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
    
    const comprar = () => {
        alert ("Gracias por tu compra")
    }

    return (
        <>
            { loading ? <h1>Cargando...</h1> :
                product.map(prod => <div key={prod.id} className="tarjeta">
                                        <div>
                                            {prod.name}
                                        </div>
                                        
                                        <div>
                                            <img src={prod.foto} alt="" width="200px"/>
                                            <br />
                                            {prod.price}
                                        </div>
                                        
                                        <div>
                                            <button>Detalle del producto</button>
                                        </div>

                                        <ItemCount initial={1} stock={10} onAdd={comprar}/>
                                        
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div> 
                                    
                                    
                             )
            }
        </>
    )
}

export default ItemList