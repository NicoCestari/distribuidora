import './styles.css';

const ItemDetail = ({ itemSelected }) => {

  return (
    <div className="detail-container">
      <img src={itemSelected?.image} alt={itemSelected?.title} />
      <h2>{itemSelected?.title}</h2>
      <p>{itemSelected?.price}</p>
    </div>
  );
};

export default ItemDetail;