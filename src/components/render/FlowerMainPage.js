import React from "react";
import FlowerField from "./main_page/FlowerField";
import { FlowerIntro } from "./main_page/FlowerIntro";
import { FlowerChoosingBouquet } from "./main_page/FlowerChoosingBouquet";

export const FlowerMainPage = () => {
  return (
    <>
      <FlowerField />
      <FlowerIntro />
      <FlowerChoosingBouquet />
    </>
  );
};
