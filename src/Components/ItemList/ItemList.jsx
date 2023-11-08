import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './styles.css';
import { Link, useParams } from "react-router-dom";


const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const productList = await response.json();

                if (id) {
                    const idFormat = id.includes('-') ? id.replace('-', ' ') : id;
                    const filteredItems = productList.filter(product => product.category === idFormat);
                    setItems(filteredItems);
                } else {
                    setItems(productList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [id]);

    return (
        <div className='item-list-container'>
            {items.map((item) => {
                return (
                    <Link to={'/item/' + item.id} key={item.id}>
                        <Item
                            image={item.image}
                            title={item.title}
                            price={item.price}
                        />
                    </Link>
                );
            })};
        </div>
    );
};


export default ItemList;
