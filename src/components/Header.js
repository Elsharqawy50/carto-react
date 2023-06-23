import React, { useState } from "react";
import CartIcon from "components/icons/CartIcon";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCartItems, setShowCartItems] = useState(false);

  const cartItems = useSelector((state) => state.cartItems.items);

  const cartItemsNumber = cartItems.reduce((cur, acc) => cur + acc.amount, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__box d-flex align-items-center justify-content-between">
          <div className="header__logo">Carto</div>
          <div className="position-relative d-flex align-items-center justify-content-center">
            <button className="cart__btn bg-transparent border-0">
              <CartIcon onClick={() => setShowCartItems((prev) => !prev)} />
              <span className="cart__badge d-flex align-items-center justify-content-center position-absolute rounded-circle">
                {cartItemsNumber}
              </span>
            </button>
            <ul
              className={`cart__list d-flex flex-column gap-4 ${
                showCartItems ? "d-block" : "d-none"
              }`}
            >
              {cartItems.map(({ id, title, amount, img, price }) => (
                <CartItem
                  key={id}
                  title={title}
                  amount={amount}
                  price={price}
                  img={img}
                  id={id}
                />
              ))}
              {cartItems.length === 0 && (
                <p className="cart__empty text-center text-capitalize">no cart items</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
