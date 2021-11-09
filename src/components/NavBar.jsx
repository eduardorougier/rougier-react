import CartWidget from "./CartWidget.js";
import {Link} from 'react-router-dom';


//Escribo la función NavBar
function NavBar() {
    return (
        <nav>
            <ul>
                <li className="btnNBItem"><Link to='/'>Brand</Link></li>
                <li className="btnNBItem"><Link to='/'>Inicio</Link></li>
                <li className="btnNBItem"><Link to='/category/Cat1'>Cat1</Link></li>
                <li className="btnNBItem"><Link to='/category/Cat2'>Cat2</Link></li>
                <li className="btnNBItem"><Link to='/cart'><CartWidget/></Link></li>

            </ul>

        </nav>
    );
}
//Exportamos la Función para poder usarla
export default NavBar;

