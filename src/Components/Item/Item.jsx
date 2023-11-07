import './styles.css';

const Item = ({ image, title, price}) => {
    return (
        <div className="card-container">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>    
    );
};

export default Item;