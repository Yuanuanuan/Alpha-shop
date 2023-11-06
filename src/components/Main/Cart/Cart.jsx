import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const { deliveryFee, totalPrice } = useContext(CartContext);

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <CartItems />
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">{deliveryFee}</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{totalPrice}</div>
      </section>
    </section>
  );
};

export default Cart;
