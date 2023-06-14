import React from "react";
import { FlowerOptions } from "./FlowerOptions";

export const FlowerChoosingBouquet = () => {
  return (
    <section id="ChoosingFlowers">
      <h2>Choose the bouquet:</h2>
      <section className="ChoosingFlowers__container">
        <FlowerOptions />
      </section>
    </section>
  );
};
