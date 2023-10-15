import React, { useContext } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { CART_RENDER_ACTION_TYPE } from "../../../redusers/cartOrderRender";

export const FlowerCartSumInfo = () => {
  const {
    alarmProver,
    cartValue,
    dispatchRender,
    setCartValue,
    setSmrOpenTrue,
    cartRender,
    deliveryInfoReduser,
    setAlarmProver,
  } = useContext(CartItemsContext);
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
    !cartRender.length || fillPoleProver ? timeOpenComponent() : setSmrOpenTrue((prev) => !prev);
  };

  const toggleButtonOrderToZero = () => {
    setCartValue({ cartItem: 0, cartCost: 0 });
    dispatchRender({
      type: CART_RENDER_ACTION_TYPE.ZEROING_CART,
    });
  };

  return (
    <div className="Flowers__Cart__SumInfo">
      <article>{cartValue.cartItem === 0 ? `You ordered nothing` : `Total items: ${cartValue.cartItem}`}</article>
      <article>Total cost: {cartValue.cartCost.toFixed(2)}$</article>
      <section className="Flowers__Cart__SumInfo--ButtonContainer">
        <button onClick={toggleButtonConfirmingOrder}>Confirm order</button>
        <button onClick={toggleButtonOrderToZero}>Zeroing order</button>
      </section>
    </div>
  );
};
