import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {

    const [contador, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)

    //Función al apretar el botón "+"
    const clickSumar = () => {
        if (contador < stock) setCount(contador + 1)
    }

    //Función al apretar el botón "-"
    const clickRestar = () => {
        if (contador > initial) setCount(contador - 1)
    }

    const handlerOnAdd = () => {
        onAdd(contador)
        setCount(initial)
        setCambiarBoton(true)
    }

    return (
        <div className="ItemCount">
            <button onClick={clickRestar} className="btnItemCount">-</button>
            <p className="count">{contador}</p>
            <button onClick={clickSumar} className="btnItemCount">+</button>

            {cambiarBoton ?
                <Link to='/cart'>
                    <button className="btnItemCount">Terminar la compra</button>
                </Link>

                :
                <button onClick={handlerOnAdd} className="btnItemCount">Agregar</button>
            }

        </div>

    )
}
export default ItemCount;