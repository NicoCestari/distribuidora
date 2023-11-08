import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail"; 


const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);

    const {id} = useParams();

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((producto) => setItemSelected(producto))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="detail-container">
            {id && (
                <div>
                    <ItemDetail itemSelected={itemSelected} />
                </div>
            )}
        </div>
    )
};

export default ItemDetailContainer;