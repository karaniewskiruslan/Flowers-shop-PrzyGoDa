import React, { useContext } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { FlowerCartAddress } from "./FlowerCartAddress";
import { FlowerCartAlertMessage } from "./FlowerCartAlertMessage";
import { FlowerCartSumRender } from "./FlowerCartSumRender";
import { FlowerCartSumInfo } from "./FlowerCartSumInfo";

export const FlowerCart = () => {
  const { alarmProver } = useContext(CartItemsContext);

  return (
    <section className="Flowers__Cart">
      <div className="Flowers__Cart--Title">Your order: Summary</div>
      <FlowerCartSumRender />
      <div className="Flowers__Cart--Title">Order info</div>
      <FlowerCartAddress />
      <FlowerCartSumInfo />
      {alarmProver && <FlowerCartAlertMessage />}
    </section>
  );
};
