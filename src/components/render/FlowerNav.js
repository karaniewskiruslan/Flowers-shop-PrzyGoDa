import React, { useContext, useState } from "react";
import logo from "../../img/logo_transparent.png";
import { CartItemsContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const FlowerNav = () => {
  const { cartValue } = useContext(CartItemsContext);
  const [toggleBurgerMemu, setToggleBurgerMemu] = useState(false);

  return (
    <nav>
      <img src={logo} alt="" />
      <ul
        data-open={toggleBurgerMemu}
        onClick={(e) => {
          if (e.target.localName === "ul") {
            setToggleBurgerMemu(!toggleBurgerMemu);
          }
        }}
      >
        <li>
          <Link to="/main-page">Main page</Link>
        </li>
        <li cartvalue={cartValue.cartItem}>
          <Link to="/flowerCart">Cart</Link>
        </li>
        <li>
          <Link to="/flowerAbout">About</Link>
        </li>
        <li>
          <Link to="/flowerContact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FlowerNav;
