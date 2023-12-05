import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ itemSelected }) => {
  const [ count, setCount] = useState (0);
  const { addItem } = useContext(CartContext);
  const stock = 5;

  const addToCart = () => {
    addItem(itemSelected, count);
  };
    

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cart');
  };

  return (
    <div className="detail-container">
      <img className="card" src={itemSelected?.image} alt={itemSelected?.title} />
      <div>
        <h4>{itemSelected?.title}</h4>
        <h6>{itemSelected?.description}</h6>
      </div>
      <div>
        <p className='detail-p'>${itemSelected?.price}</p>
      </div>
      <div>
        <button className='btn-btn-primary' onClick={addToCart}>Agregar al carrito</button>
        <ItemCount count={count} setCount={setCount} stock={stock}/>
        <button className='btn-btn-primary' onClick={handleNavigation}>Comprar</button>
      </div>

    </div>
  );
};

export default ItemDetail;