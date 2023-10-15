import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";

export const FlowerCartAddressSelect = () => {
  const { addressID, deliveryInfoReduser } = useContext(CartItemsContext);

  return (
    <>
      <label htmlFor={`${addressID}_time`}>Better to deliver on:</label>
      <div className="select--container">
        <select id={`${addressID}_time`} defaultValue={deliveryInfoReduser.deliveryTime} name="deliveryTime">
          <option>12-14</option>
          <option>14-16</option>
          <option>16-18</option>
          <option>18-20</option>
          <option>20-22</option>
        </select>
        <div className="select--button">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};
