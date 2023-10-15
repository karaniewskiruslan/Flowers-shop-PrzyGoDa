import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";
import { STATEPROPS } from "../../../../redusers/formReduser";

export const FlowerCartAddressPromo = () => {
  const { addressID, deliveryInfoDispatch } = useContext(CartItemsContext);

  const handleChange = (e) => {
    deliveryInfoDispatch({
      type: STATEPROPS.TEXT_CHANGING,
      devinformation: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <>
      <label htmlFor={`${addressID}_promocode`}>Promocode (optional):</label>
      <input type="text" onChange={handleChange} name="promocode" id={`${addressID}_promocode`} />
    </>
  );
};
