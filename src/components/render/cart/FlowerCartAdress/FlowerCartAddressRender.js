import React, { useContext } from "react";
import { FlowerCartAddressCity } from "./FlowerCartAddressCity";
import { FlowerCartAddressAddress } from "./FlowerCartAddressAddress";
import { FlowerCartAddressData } from "./FlowerCartAddressData";
import { FlowerCartAddressSelect } from "./FlowerCartAddressSelect";
import { FlowerCartAddressComment } from "./FlowerCartAddressComment";
import { CartItemsContext } from "../../../../context/CartContext";
import { STATEPROPS } from "../../../../redusers/formReduser";

export const FlowerCartAddressRender = () => {
  const { deliveryInfoDispatch } = useContext(CartItemsContext);

  const handleChange = (e) => {
    deliveryInfoDispatch({
      type: STATEPROPS.TEXT_CHANGING,
      devinformation: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <form id="Flowers__Cart__DeliveryInfo__DeliveryAttributes" onChange={handleChange}>
      <FlowerCartAddressCity />
      <FlowerCartAddressAddress />
      <FlowerCartAddressData />
      <FlowerCartAddressSelect />
      <FlowerCartAddressComment />
    </form>
  );
};
