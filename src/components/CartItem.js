import React from "react";
import { useDispatch } from "react-redux";
import { CartItemsActions } from "store/CartItemsSlice";

const CartItem = ({ id, title, amount, img, price }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    const addObj = {
      title,
      price,
      img,
      amount: 1,
      id,
    };

    dispatch(CartItemsActions.addItem(addObj));
  };
  return (
    <li className="d-flex justify-content-center align-items-center gap-4">
      <img src={`img/${img}`} alt="product" className="cart__item-img" />
      <div className="cart__item-text me-auto text-capitalize">
        <h5 className="cart__item-head fw-bold">{title}</h5>
        <div className="d-flex align-items-center gap-4">
          <span className={`fw-bold`}>${price * amount}</span>
          <span className="cart__item-amount fs-6 fw-bold border p-2">
            x {amount}
          </span>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row">
        <button onClick={() => dispatch(CartItemsActions.deleteItem(id))}>
          −
        </button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
