import './styles.css';
import CartWidget from '../../Components/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
    const { productQuantity } = useContext(CartContext);
    return (
        <div className="navbar-container">
            <div>
                <h1>Futuro Logo</h1>
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/jewelery'} className='button-style'>Joyeria</Link>
                    </li>
                    <li>
                        <Link to={'/category/electronics'} className='button-style'>Electronicos</Link>
                    </li>
                    <li>
                        <Link to={"/category/men's-clothing"} className='button-style'>Hombre</Link>
                    </li>
                    <li>
                        <Link to={"/category/women's-clothing"} className='button-style'>Mujer</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='button-style'>Home</Link>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
                <h6>{productQuantity}</h6>
            </div>

        </div>
    );
};

export default Navbar;