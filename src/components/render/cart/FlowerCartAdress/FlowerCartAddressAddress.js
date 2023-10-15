import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";

export const FlowerCartAddressAddress = () => {
  const { addressID, deliveryInfoReduser } = useContext(CartItemsContext);

  return (
    <>
      <label htmlFor={`${addressID}_city`}>City or suburban:</label>
      <input type="address" name="city" defaultValue={deliveryInfoReduser.city} id={`${addressID}_city`} />
    </>
  );
};
