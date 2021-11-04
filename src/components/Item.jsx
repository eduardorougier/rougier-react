import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item(prod) {
    return (
        <div key={prod.prod.id} className="card">
            <div className="card-header">
                {prod.prod.title}
                {prod.prod.category}
            </div>

            <div className="card-body">
                <img src={prod.prod.pictureUrl} alt='' />
                ${prod.prod.price}
            </div>

            <div className="card-footer">
                <Link to={`/item/${prod.prod.id}`}>
                <button className="btn btn-outline-primary btn-block">
                    Detalle del producto
                </button>
                </Link>
            </div>
            <ItemCount  stock={5} initial={1}/>
        </div>
    );
}

export default Item;
export default Item;