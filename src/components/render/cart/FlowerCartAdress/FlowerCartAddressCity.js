import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";

export const FlowerCartAddressCity = () => {
  const { addressID, deliveryInfoReduser } = useContext(CartItemsContext);

  return (
    <>
      <label htmlFor={`${addressID}_address`}>Address to deliver:</label>
      <input type="address" name="address" defaultValue={deliveryInfoReduser.address} id={`${addressID}_address`} />
    </>
  );
};
