import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";

export const FlowerCartAlertMessage = () => {
  const { deliveryInfoReduser, cartRender } = useContext(ObjectContext);

  let fillPoleProver;

  fillPoleProver = Object.entries(deliveryInfoReduser).some((item) => {
    return item[1] === "";
  });

  const AlarmText = () => {
    if (!cartRender.length && fillPoleProver) {
      return (
        <h3>
          Your shopping cart is empty and you don't fill all order info poles.
          Please, order something on your cart and fill all required poles
        </h3>
      );
    } else if (cartRender.length > 0 && fillPoleProver) {
      return (
        <h3>
          You don't fill all order info poles. Please, fill all required poles
        </h3>
      );
    } else if (!cartRender.length && !fillPoleProver) {
      return <h3>Your shopping cart is empty. Please, order something</h3>;
    }
  };

  return (
    <section id="alarm_message">
      <h2>Warning</h2>
      <AlarmText />
      {!cartRender.length && (
        <button>
          <Link to="/main-page">To main page</Link>
        </button>
      )}
    </section>
  );
};
