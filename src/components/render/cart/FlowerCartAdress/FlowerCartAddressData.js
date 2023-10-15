import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";

export const FlowerCartAddressData = () => {
  const { addressID, deliveryInfoReduser } = useContext(CartItemsContext);

  return (
    <>
      <label htmlFor={`${addressID}_date`}>Delivery date:</label>
      <input type="date" name="deliveryData" defaultValue={deliveryInfoReduser.deliveryData} id={`${addressID}_date`} />
    </>
  );
};
