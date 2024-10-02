import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; // Assuming this is the product list

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let product of all_product) {
        cart[product.id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [token] = useState('your_auth_token'); // Kept without setter if you want to use it later
    const [currency] = useState('$'); // Kept without setter if you want to use it later
    const [deliveryCharge] = useState(5); // Kept without setter if you want to use it later
    const url = 'https://api.yourbackend.com'; // Your API base URL

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log("Cart Items After Adding:", { ...cartItems, [itemId]: cartItems[itemId] + 1 });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        token, // Pass token to context
        currency, // Pass currency to context
        deliveryCharge, // Pass deliveryCharge to context
        url, // Pass URL to context
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
