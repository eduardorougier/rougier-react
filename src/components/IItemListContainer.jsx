import ItemList from "./ItemList"


export const ItemListContainer = ({greetings="Falta saludo"}) => {
    return (
            <div>
                <h3 className="tituloSaludo">{greetings}</h3>
                <div className="contenedorTarjetas">
                    <ItemList />
                </div>
            </div>
            
    )
}