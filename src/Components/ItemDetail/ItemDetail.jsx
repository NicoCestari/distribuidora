import './styles.css';

const ItemDetail = ({ itemSelected }) => {

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

    </div>
  );
};

export default ItemDetail;