import './styles.css';

const ItemDetail = ({itemSelected}) => {
    const { image, title, price } = itemSelected;

  return (
    <div>
        <img src={itemSelected?.image} alt={itemSelected?.title} />
        <h2>{itemSelected?.title}</h2>
        <p>{itemSelected?.price}</p>
    </div>
  );
};

export default ItemDetail;