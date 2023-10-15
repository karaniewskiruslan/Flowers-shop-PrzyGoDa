import { createContext, useEffect, useId, useReducer, useRef, useState } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import { cartOrderRenderInitializer, cartOrderRenderReduser } from "../redusers/cartOrderRender";
import { delivery_reduser, delivery_state } from "../redusers/formReduser";
import { BrowserRouter } from "react-router-dom";
import { ConfirmPage } from "../components/render/confirmPage/ConfirmPage";

export const CartItemsContext = createContext(null);

export const CartItemsContextProvider = ({ children }) => {
  const [alarmProver, setAlarmProver] = useState(false);
  const [scrollDownProve, setScrollDownProve] = useState(false);
  const [scrollTopProve, setScrollTopProve] = useState(true);
  const [smrOpenTrue, setSmrOpenTrue] = useState(false);
  const [cartValue, setCartValue] = useLocalStorage("cartValue", {
    cartItem: 0,
    cartCost: 0,
  });
  const [cartRender, dispatchRender] = useReducer(cartOrderRenderReduser, [], cartOrderRenderInitializer);
  const [deliveryInfoReduser, deliveryInfoDispatch] = useReducer(delivery_reduser, delivery_state);
  const addressID = useId();
  const radioID = useId();
  const confirmPageRef = useRef();
  const dialogPageRef = useRef();
  const radioReferanse = useRef();
  const textReferanse = useRef();

  useEffect(() => {
    localStorage.setItem("shoppingCartArray", JSON.stringify(cartRender));
  }, [cartRender]);

  return (
    <BrowserRouter>
      <CartItemsContext.Provider
        value={{
          addressID: addressID,
          alarmProver: alarmProver,
          cartValue: cartValue,
          cartRender: cartRender,
          confirmPageRef: confirmPageRef,
          deliveryInfoDispatch: deliveryInfoDispatch,
          deliveryInfoReduser: deliveryInfoReduser,
          dispatchRender: dispatchRender,
          dialogPageRef: dialogPageRef,
          radioID: radioID,
          radioReferanse: radioReferanse,
          setAlarmProver: setAlarmProver,
          scrollDownProve: scrollDownProve,
          scrollTopProve: scrollTopProve,
          setCartValue: setCartValue,
          setScrollDownProve: setScrollDownProve,
          setScrollTopProve: setScrollTopProve,
          setSmrOpenTrue: setSmrOpenTrue,
          textReferanse: textReferanse,
        }}
      >
        {children}
        {smrOpenTrue ? <ConfirmPage /> : null}
      </CartItemsContext.Provider>
    </BrowserRouter>
  );
};
