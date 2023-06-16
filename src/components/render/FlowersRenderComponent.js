import React, { useEffect, useReducer, useState } from "react";
import FlowerNav from "./FlowerNav";
import { FlowerMainPage } from "./FlowerMainPage";
import { CartItemsContext } from "../../context/CartContext";
import { FlowerFooter } from "./FlowerFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FlowerCart } from "./cart/FlowerCart";
import { FlowerAbout } from "./about/FlowerAbout";
import { FlowerContact } from "./contact/FlowerContact";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { ObjectContext } from "../../context/ObjectContext";
import {
  cartOrderRenderReduser,
  cartOrderRenderInitializer,
} from "../../redusers/cartOrderRender";
import { ConfirmPage } from "./confirmPage/ConfirmPage";
import { FlowersDialog } from "./dialog_page/FlowersDialog";
import { delivery_reduser, delivery_state } from "../../redusers/formReduser";

export const FlowersRenderComponent = () => {
  const StartingPageShortcut = ({ children }) => {
    const [smrOpenTrue, setSmrOpenTrue] = useState(false);
    const [cartValue, setCartValue] = useLocalStorage("cartValue", {
      cartItem: 0,
      cartCost: 0,
    });
    const [cartRender, dispatchRender] = useReducer(
      cartOrderRenderReduser,
      [],
      cartOrderRenderInitializer
    );
    const [deliveryInfoReduser, deliveryInfoDispatch] = useReducer(
      delivery_reduser,
      delivery_state
    );

    useEffect(() => {
      localStorage.setItem("shoppingCartArray", JSON.stringify(cartRender));
    }, [cartRender]);

    return (
      <BrowserRouter>
        <CartItemsContext.Provider
          value={{
            cartValue: cartValue,
            setCartValue: setCartValue,
            setSmrOpenTrue: setSmrOpenTrue,
          }}
        >
          <ObjectContext.Provider
            value={{
              cartRender: cartRender,
              dispatchRender: dispatchRender,
              deliveryInfoReduser: deliveryInfoReduser,
              deliveryInfoDispatch: deliveryInfoDispatch,
            }}
          >
            {children}
            {smrOpenTrue && <ConfirmPage />}
          </ObjectContext.Provider>
        </CartItemsContext.Provider>
      </BrowserRouter>
    );
  };

  return (
    <StartingPageShortcut>
      <FlowerNav />
      <main>
        <Routes>
          <Route path="main-page" element={<FlowerMainPage />} />
          <Route path="flowerCart" element={<FlowerCart />} />
          <Route path="flowerAbout" element={<FlowerAbout />} />
          <Route path="flowerContact" element={<FlowerContact />} />
        </Routes>
      </main>
      <FlowerFooter />
      <FlowersDialog />
    </StartingPageShortcut>
  );
};
