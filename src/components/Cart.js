import React from "react"
import { useCartContext } from "./CartContext"


const Cart = () => {

    const { cartList } = useCartContext()
    console.log(cartList, 'ESTO ESTÁ EN CARRITO')

    return (

        <div className="card-cart">
            {cartList.map(prod =>

                <>
                    <div>
                        <label className="producto-titulo">{prod.prod.prod.title}</label>
                    </div>

                    <div>
                        <img src={prod.prod.prod.foto} className="foto-prod-cart"/>
                    </div>

                    <div>
                        <label>${prod.prod.prod.price}</label>
                        <label>Cantidad: {prod.cantidad}</label>
                    </div>

                    <button>Quitar producto</button>
                </>
                
            )}
            <button>Limpiar Carrito</button>
        </div >

        

    )
}

export default Cart