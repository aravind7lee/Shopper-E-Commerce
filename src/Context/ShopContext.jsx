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
    const [token, setToken] = useState('your_auth_token'); // Add the token here for authorization
    const [currency, setCurrency] = useState('$'); // Assuming currency is USD, adjust if needed
    const [deliveryCharge, setDeliveryCharge] = useState(5); // Example delivery charge, adjust as needed
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
