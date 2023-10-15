import React, { useState } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { useContext } from "react";
import ConfirmPageOrder from "./ConfirmPageOrder";

export const ConfirmPage = () => {
  const { setSmrOpenTrue, cartValue, cartRender, scrollTopProve, scrollDownProve, confirmPageRef, dialogPageRef } =
    useContext(CartItemsContext);
  const [isClosing, setIsClosing] = useState(false);

  const toggleButtonClose = () => {
    const refShrt = confirmPageRef.current;

    if (isClosing === false) {
      refShrt.classList.add("closing");
      setIsClosing(true);
      refShrt.addEventListener(
        "animationend",
        () => {
          refShrt.classList.remove("closing");
          setIsClosing(false);
          setSmrOpenTrue((prev) => !prev);
        },
        { once: true }
      );
    }
  };

  const toggleButtonAsseptOrder = () => {
    const refShrt = dialogPageRef.current;

    refShrt.showModal();
    setSmrOpenTrue((prev) => !prev);
  };

  return (
    <section className="flower-assept" ref={confirmPageRef}>
      <div
        className="flower-assept__container"
        data-length_proove={cartRender.length > 1 ? true : false}
        data-ontop={scrollTopProve}
        data-onbottom={scrollDownProve}
      >
        <h2>Asseption page</h2>
        <ConfirmPageOrder />
        <div>{`Cart cost: ${cartValue.cartCost.toFixed(2)}$`}</div>
        <div className="flower-assept__container--buttonHolder">
          <button onClick={toggleButtonAsseptOrder}>Assept order</button>
        </div>
        <div className="closeButton" onClick={toggleButtonClose}></div>
      </div>
    </section>
  );
};
