import React, { useContext, useId, useRef } from "react";
import { STATEPROPS } from "../../../redusers/formReduser";
import { ObjectContext } from "../../../context/ObjectContext";

export const FlowerCartAddress = () => {
  const addressID = useId();
  const radioID = useId();
  const textReferanse = useRef();
  const radioReferanse = useRef();
  const date = new Date();

  const { deliveryInfoReduser, deliveryInfoDispatch } =
    useContext(ObjectContext);

  const handleChange = (e) => {
    deliveryInfoDispatch({
      type: STATEPROPS.TEXT_CHANGING,
      devinformation: { name: e.target.name, value: e.target.value },
    });
  };

  const handleRadioChange = (e) => {
    deliveryInfoDispatch({
      type: STATEPROPS.RADIO_CHANGED,
      radioChange: e.target.value,
    });
  };

  return (
    <article className="Flowers__Cart__DeliveryInfo">
      <form
        id="Flowers__Cart__DeliveryInfo__DeliveryAttributes"
        onChange={handleChange}
      >
        <label htmlFor={`${addressID}_city`}>City or suburban:</label>
        <input
          type="address"
          name="city"
          defaultValue={deliveryInfoReduser.city}
          id={`${addressID}_city`}
        />
        <label htmlFor={`${addressID}_address`}>Address to deliver:</label>
        <input
          type="address"
          name="address"
          defaultValue={deliveryInfoReduser.address}
          id={`${addressID}_address`}
        />
        <label htmlFor={`${addressID}_date`}>Delivery date:</label>
        <input
          type="date"
          name="deliveryData"
          defaultValue={deliveryInfoReduser.deliveryData}
          min={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
          id={`${addressID}_date`}
        />
        <label htmlFor={`${addressID}_time`}>Better to deliver on:</label>
        <div className="select--container">
          <select
            id={`${addressID}_time`}
            defaultValue={deliveryInfoReduser.deliveryTime}
            name="deliveryTime"
          >
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
        <label htmlFor={`${addressID}_comment`}>Additional comment:</label>
        <textarea
          ref={textReferanse}
          name="comment"
          defaultValue={deliveryInfoReduser.comment}
          id={`${addressID}_comment`}
        ></textarea>
      </form>
      <form
        id="Flowers__Cart__DeliveryInfo__DeliveryTypeRadio"
        defaultValue={deliveryInfoReduser.typeOfOrder}
        onChange={handleRadioChange}
        ref={radioReferanse}
      >
        <label>
          <input
            type="radio"
            name="typeOfOrder"
            defaultValue="Delivery"
            id={`${radioID}001`}
          />
          Delivery
        </label>
        <label>
          <input
            type="radio"
            name="typeOfOrder"
            defaultValue="Take away"
            id={`${radioID}002`}
          />
          Take away
        </label>
      </form>
      <label htmlFor={`${addressID}_promocode`}>Promocode (optional):</label>
      <input
        type="text"
        onChange={handleChange}
        name="promocode"
        id={`${addressID}_promocode`}
      />
    </article>
  );
};
