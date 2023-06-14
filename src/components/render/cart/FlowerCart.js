import React, { useContext } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { FlowerCartAddress } from "./FlowerCartAddress";
import { FlowerCartSummary } from "./FlowerCartSummary";
import { ObjectContext } from "../../../context/ObjectContext";
import { CART_RENDER_ACTION_TYPE } from "../../../redusers/cartOrderRender";
import { FlowerCartAlertMessage } from "./FlowerCartAlertMessage";
import { useState } from "react";

export const FlowerCart = () => {
  const [alarmProver, setAlarmProver] = useState(false);
  const { cartValue, setCartValue, setSmrOpenTrue } =
    useContext(CartItemsContext);
  const { cartRender, dispatchRender, deliveryInfoReduser } =
    useContext(ObjectContext);

  let fillPoleProver;

  fillPoleProver = Object.entries(deliveryInfoReduser).some((item) => {
    return item[1] === "";
  });

  const timeOpenComponent = () => {
    if (!alarmProver) {
      setAlarmProver((prev) => !prev);
      setTimeout(() => setAlarmProver((prev) => !prev), 5000);
    }
  };

  const toggleButtonConfirmingOrder = () => {
    !cartRender.length || fillPoleProver
      ? timeOpenComponent()
      : setSmrOpenTrue((prev) => !prev);
  };

  const toggleButtonOrderToZero = () => {
    setCartValue({ cartItem: 0, cartCost: 0 });
    dispatchRender({
      type: CART_RENDER_ACTION_TYPE.ZEROING_CART,
    });
  };

  return (
    <section className="Flowers__Cart">
      <div className="Flowers__Cart--Title">Your order: Summary</div>
      <div className="Flowers__Cart--Summary">
        <FlowerCartSummary />
      </div>
      <div className="Flowers__Cart--Title">Order info</div>
      <FlowerCartAddress />
      <div>
        <article>
          {cartValue.cartItem === 0
            ? `You ordered nothing`
            : `Total items: ${cartValue.cartItem}`}
        </article>
        <article>Total cost: {cartValue.cartCost.toFixed(2)}$</article>
        <button onClick={toggleButtonConfirmingOrder}>Confirm order</button>
        <button onClick={toggleButtonOrderToZero}>Zeroing order</button>
        {alarmProver && <FlowerCartAlertMessage />}
      </div>
    </section>
  );
};
