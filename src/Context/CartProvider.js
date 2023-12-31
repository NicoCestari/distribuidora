import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";


const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const addItem = (product, quantity) => {
        setProducts([
            ...products, {
                ...products, quantity
            },
        ]);

    };
    useEffect(() => {
        setProductQuantity(
            products.reduce((acc, product) => acc + product.quantity, 0),
            0
        );
    }, [products]);

    return (
        <CartContext.Provider value={{ products, addItem, productQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;