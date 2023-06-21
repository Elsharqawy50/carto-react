import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header__box d-flex align-items-center justify-content-between">
          <div class="header__logo">Carto</div>
          <div class="position-relative d-flex align-items-center justify-content-center">
            <button class="cart__btn bg-transparent border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 cart__icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span class="cart__badge d-flex align-items-center justify-content-center position-absolute rounded-circle">0</span>
            </button>
            <ul class="cart__list d-none">
              <p class="cart_empty">no cart items</p>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
