import React, { useContext } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { FlowerCartSummary } from "./FlowerCartSummary";

export const FlowerCartSumRender = () => {
  const { cartRender } = useContext(CartItemsContext);

  return (
    <>
      {cartRender.length === 0 ? null : (
        <div className="Flowers__Cart--Summary">
          <FlowerCartSummary />
        </div>
      )}
    </>
  );
};
