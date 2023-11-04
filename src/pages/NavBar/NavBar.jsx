import './styles.css';
import CartWidget from '../../Components/CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img src={"./Logo.png"} alt="Distribuidora" height={"200px"} weigth={"200px"} />
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <button className='button-style'>Petshop</button>
                    </li>
                    <li>
                        <button className='button-style'>Acuario</button>
                    </li>
                    <li>
                        <button className='button-style'>Pajareria</button>
                    </li>
                    <li>
                        <button className='button-style'>Semilleria</button>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    );
};

export default Navbar;