import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './styles.css';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const products = [

    { "id": 1, "img": "./image/RC.jpeg", "title": "Royal Canin", "price": "$5600", },
    { "id": 2, "img": "./image/pp.jpeg", "title": "Proplan", "price": "$5800" },
    { "id": 3, "img": "./image/EU.jpeg", "title": "Eukanuba", "price": "$5000" },
    { "id": 4, "img": "./image/OP.jpeg", "title": "Old Prince", "price": "$4000" },
    { "id": 5, "img": "./image/GC1.jpg", "title": "Golocan", "price": "$3500" },
    { "id": 6, "img": "./image/TT1.jpg", "title": "Tetra", "price": "$4200" },

];

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [itemSelectedId, setItemSelectedId] = useState(null);
    const [itemSelected, setItemSelected] = useState(null);

    const fetchProducts = () => {
        fetch(products)
        .then((res) => res.json())
        .then((json) => setItems(json))
        .catch((error) => console.log(error))
    };
      

    const fetchProduct = () => {
        fetch(products)
        .then((res) => res.json())
        .then((json) => setItem(json))
        .catch((error) => console.log(error));

    };

    useEffect(() => {
        fetchProduct();
    }, [itemSelectedId]);

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="item-list-container">
            {itemSelectedId && (
                <div>
                    <ItemDetail itemSelected={itemSelected} />
                </div>
            )}
            {items.map((item) => {
                return (
                    <div key={item.id} onClick={() => setItemSelectedId(item.id)}>
                        <Item 
                            image={item.image}
                            title={item.title}
                            price={item.price}
                        />
                    </div>    
                );
            })};
        </div>
    );
};


export default ItemList;
