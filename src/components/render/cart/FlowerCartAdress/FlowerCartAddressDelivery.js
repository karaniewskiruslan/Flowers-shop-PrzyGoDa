import React, { useContext } from "react";
import { CartItemsContext } from "../../../../context/CartContext";
import { STATEPROPS } from "../../../../redusers/formReduser";

export const FlowerCartAddressDelivery = () => {
  const { deliveryInfoReduser, radioReferanse, deliveryInfoDispatch, radioID } = useContext(CartItemsContext);

  const handleRadioChange = (e) => {
    deliveryInfoDispatch({
      type: STATEPROPS.RADIO_CHANGED,
      radioChange: e.target.value,
    });
  };

  return (
    <form
      id="Flowers__Cart__DeliveryInfo__DeliveryTypeRadio"
      defaultValue={deliveryInfoReduser.typeOfOrder}
      onChange={handleRadioChange}
      ref={radioReferanse}
    >
      <label>
        <input type="radio" name="typeOfOrder" defaultValue="Delivery" id={`${radioID}001`} />
        Delivery
      </label>
      <label>
        <input type="radio" name="typeOfOrder" defaultValue="Take away" id={`${radioID}002`} />
        Take away
      </label>
    </form>
  );
};
