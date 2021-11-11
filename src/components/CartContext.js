import { createContext, useState, useContext } from "react"

//Crear contexto
const CartContext = createContext()

//Exportar useCartContext para usar en ItemDetail
export const useCartContext = () => useContext(CartContext)



//Función
const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        setCartList([
            ...cartList,
            items
        ])
    }

    

    function mostrarListado() {
        console.log(cartList)
    }

    return (
        <CartContext.Provider value={
            {
                cartList,
                mostrarListado,
                agregarAlCarrito,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider