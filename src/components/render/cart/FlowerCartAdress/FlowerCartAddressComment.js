import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";

export const FlowerCartAddressComment = () => {
  const { addressID, deliveryInfoReduser, textReferanse } = useContext(CartItemsContext);

  return (
    <>
      <label htmlFor={`${addressID}_comment`}>Additional comment:</label>
      <textarea
        ref={textReferanse}
        name="comment"
        defaultValue={deliveryInfoReduser.comment}
        id={`${addressID}_comment`}
      ></textarea>
    </>
  );
};
