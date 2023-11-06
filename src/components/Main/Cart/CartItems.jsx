import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ReactComponent as PlusIcon } from "../../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../icons/minus.svg";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { handleChangeQuantity } = useContext(CartContext);

  if (quantity > 0) {
    return (
      <div
        key={id}
        className="product-container col col-12"
        data-count="0"
        data-price={price}
      >
        <img className="img-container" src={img} alt="produceImage" />
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <MinusIcon
                onClick={() => {
                  handleChangeQuantity(id, "minus");
                }}
              />
              <span className="product-count" key={id}>
                {quantity}
              </span>
              <PlusIcon
                onClick={() => {
                  handleChangeQuantity(id, "plus");
                }}
              />
            </div>
          </div>
          <div className="price">{price}</div>
        </div>
      </div>
    );
  }
};

const CartItems = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems && cartItems.map((cartItem) => (
        <CartItem {...cartItem} key={cartItem.id} />
      ))}
    </>
  );
};

export default CartItems;
