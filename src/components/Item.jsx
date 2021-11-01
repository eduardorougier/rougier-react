import ItemCount from "./ItemCount";

function Item(edu) {
  
       const comprar = () => {
        alert ("Gracias por tu compra")
    }
  
    return (
    <div key={edu.id} className="tarjeta">
      <div>
        <h3>{edu.name}</h3>
      </div>

      <div>
        <img src={edu.foto} alt="" width="200px" />
        <br />
        <h3>${edu.price}</h3>
      </div>

      <div>
        <button>Detalle del producto</button>
      </div>

      <ItemCount initial={1} stock={10} onAdd={comprar} />
    </div>
  );
}

export default Item;

// const productos = [
//     {id: 1, name:"Producto1", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:150},
//     {id: 2, name:"Producto2", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:250},
//     {id: 3, name:"Producto3", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:100},
//     {id: 4, name:"Producto4", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:150},
//     {id: 5, name:"Producto5", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:150},
//     {id: 6, name:"Producto6", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:15},
//     {id: 7, name:"Producto7", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:50},
//     {id: 8, name:"Producto8", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:350},
//     {id: 9, name:"Producto9", foto:"https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg", price:500}
// ]

// const getFetch = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         resolve(productos)
//     }, 2000);
// })

// export default getFetch
