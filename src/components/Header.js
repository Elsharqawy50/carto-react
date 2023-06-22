import React from "react";
import CartIcon from "./icons/CartIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box d-flex align-items-center justify-content-between">
          <div className="header__logo">Carto</div>
          <div className="position-relative d-flex align-items-center justify-content-center">
            <button className="cart__btn bg-transparent border-0">
              <CartIcon />
              <span className="cart__badge d-flex align-items-center justify-content-center position-absolute rounded-circle">
                0
              </span>
            </button>
            <ul className="cart__list d-none">
              <p className="cart_empty">no cart items</p>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
