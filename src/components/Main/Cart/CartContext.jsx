import { createContext, useState } from "react";

const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 300,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartData);

  let deliveryFee = 199;
  let totalPrice = cartItems.reduce(
    (current, next) => current + next.price * next.quantity,
    0
  );

  if (totalPrice > 900) {
    deliveryFee = "免運費";
  } else {
    totalPrice += deliveryFee;
  }

  const handleChangeQuantity = (id, type) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (type === "minus" && cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else if (type === "plus" && cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, deliveryFee, totalPrice, handleChangeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
