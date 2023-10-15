import React from "react";
import FlowerNav from "./FlowerNav";
import { FlowerMainPage } from "./FlowerMainPage";
import { CartItemsContextProvider } from "../../context/CartContext";
import { FlowerFooter } from "./FlowerFooter";
import { Route, Routes } from "react-router-dom";
import { FlowerCart } from "./cart/FlowerCart";
import { FlowerAbout } from "./about/FlowerAbout";
import { FlowerContact } from "./contact/FlowerContact";
import { FlowersDialog } from "./dialog_page/FlowersDialog";

export const FlowersRenderComponent = () => {
  return (
    <CartItemsContextProvider>
      <FlowerNav />
      <main>
        <Routes>
          <Route path="Flowers-shop-PrzyGoDa" element={<FlowerMainPage />} />
          <Route path="flowerCart" element={<FlowerCart />} />
          <Route path="flowerAbout" element={<FlowerAbout />} />
          <Route path="flowerContact" element={<FlowerContact />} />
        </Routes>
      </main>
      <FlowerFooter />
      <FlowersDialog />
    </CartItemsContextProvider>
  );
};
