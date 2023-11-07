import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './styles.css';
import { Link, useParams } from "react-router-dom";


const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    const fetchProducts = fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => json)
        .catch((error) => console.log(error));
    useEffect(() => {
        const myFunction = async () => {
            if (id) {
                const filteredItems = await fetchProducts.then((productList) => {
                    return productList.filter((product) => {
                        const idFormat = id.category.includes('-')
                            ? id.replace('-', ' ')
                            : id;
                        return product.category === idFormat;
                    });

                });
                setItems(filteredItems);
            } else {
                setItems(fetchProducts);
            }
        };
        myFunction();
    }, [id])


    return (
        <div className="item-list-container">
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
