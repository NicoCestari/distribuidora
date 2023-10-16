import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <div className='cart-style'>
            <Icon.CartCheckFill />
            <div>
                <span>4</span>
            </div>
        </div>
    );
};

export default CartWidget;