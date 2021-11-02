import ItemCount from "./ItemCount";

function Item(props) {
  
       const comprar = () => {
        alert ("Gracias por tu compra")
    }
  
    return (
    <div key={props.prod.id} className="tarjeta">
      <div>
        <h3>{props.prod.name}</h3>
      </div>

      <div>
        <img src={props.prod.foto} alt="" width="200px" />
        <br />
        <h3>${props.prod.price}</h3>
      </div>
      
      <div>
        <button>Detalle del producto</button>
      </div>

      <ItemCount initial={1} stock={10} onAdd={comprar} />
    </div>
  );
}

export default Item;

