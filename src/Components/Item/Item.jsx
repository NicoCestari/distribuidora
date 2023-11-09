import './styles.css';

const Item = ({ image, title, price }) => {
    return (
        <div className="card-container">
            <img src={image} alt="" height={"75px"} width={"75px"} />
            <div className='text-container'>
                <h6>{title}</h6>
                <p>Price: ${price}</p>
            </div>
            
        </div>
    );
};

export default Item;