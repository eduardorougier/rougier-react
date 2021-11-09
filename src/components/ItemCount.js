import { useState } from "react";

function ItemCount({stock, initial }){

    const [count, setCount] = useState(initial);

    //Función al apretar el botón "+"
    const sumar = () => {
        if(count >= stock){
            alert ("El stock actual es de " + count +" unidades.")
        }else{
            setCount(count + 1);
        }        
    }
    //Función al apretar el botón "-"
    const restar = () => {
        if (count <= initial){
            alert ("La cantidad mínima es de " + count + " unidades.")
        }else{
            setCount(count - 1);
        }        
    }
    //Funcón al apretar botón "Agregar al carrito"
    const agregarCarrito = () => {
        alert ('Usted agregó al carrito ' + count + ' unidades.')
    }

    return(
        <div className="ItemCount">
            <button onClick={restar} className="btnItemCount"> - </button>
            <p className="count">{count}</p>
            <button onClick={sumar}  className="btnItemCount"> + </button>
            <button onClick={agregarCarrito} className="btnItemCount">Agregar</button>
        </div>
    )
}
export default ItemCount;