import React, { useContext, useState } from "react";
import { CartItemsContext } from "../../../context/CartContext";
import flowers from "../../flowerslist/flowersList";
import { ObjectContext } from "../../../context/ObjectContext";
import { CART_RENDER_ACTION_TYPE } from "../../../redusers/cartOrderRender";

export const FlowerOptions = () => {
  const { cartValue, setCartValue } = useContext(CartItemsContext);
  const { cartRender, dispatchRender } = useContext(ObjectContext);

  const [work, setWork] = useState({
    ...flowers.map((el) => {
      return el.prise.option_0;
    }),
  });

  const toggleFormCostchange = (e) => {
    e.preventDefault();

    const selectElements = [...document.querySelectorAll("select")];
    const selectedEl = selectElements.indexOf(e.target);
    const selectedElIndex = selectElements[selectedEl].selectedIndex;

    let selectedCostChanged = (work[selectedEl] =
      flowers[selectedEl]["prise"][`option_${selectedElIndex}`]);
    setWork({ ...work, selectedCostChanged });
  };

  const toggleClickAddtocart = (e) => {
    const selectElementsSelected = [...document.querySelectorAll("select")];
    const selectElements = [
      ...document.querySelectorAll(".buttonHolder button:first-child"),
    ];
    const selectedEl = selectElements.indexOf(e.target);
    const workCostSrt = work[selectedEl];
    const dispatchData = flowers.find((i) => i.id === selectedEl);
    const dispatchDataProved = cartRender.find((i) => i.id === selectedEl)?.id;
    const selectElementsSelectedId =
      selectElementsSelected[selectedEl].selectedIndex;

    setCartValue({
      cartItem: cartValue.cartItem + 1,
      cartCost: cartValue.cartCost + workCostSrt,
    });

    if (dispatchDataProved !== selectedEl) {
      dispatchRender({
        type: CART_RENDER_ACTION_TYPE.ADDING_NEW_POS,
        cart_Object: {
          id: selectedEl,
          quantity: {
            ...Object.keys(dispatchData.options).map((el, ind) => {
              if (ind === selectElementsSelectedId) {
                return (el = 1);
              } else {
                return (el = 0);
              }
            }),
          },
        },
      });
    } else {
      dispatchRender({
        type: CART_RENDER_ACTION_TYPE.CHANGE_QUANTITY,
        cart_Object: {
          id: selectedEl,
          quantity: selectElementsSelectedId,
        },
      });
    }
  };

  const toggleClickBuyNow = () => {
    document.querySelector("dialog").showModal();
  };

  return flowers.map((element) => {
    let bouquetOption = Object.entries(element.options);

    return (
      <article className="ChoosingFlowers__container__section" key={element.id}>
        <img src={element.img_src} alt={element.name} />
        <div>
          <section className="ChoosingFlowers__container__section__part--top">
            <span>{element.name}</span>
            <span>{work[element.id] + "$"}</span>
          </section>
          <section className="ChoosingFlowers__container__section__part--bottom">
            <form onChange={toggleFormCostchange}>
              <select
                name="NumberOfflowers"
                className="ChoosingFlowers__container__section__select"
              >
                {bouquetOption.map((el, number) => {
                  let bouquet = el[1];

                  return (
                    <option key={number} value={bouquet}>
                      {bouquet}
                    </option>
                  );
                })}
              </select>
            </form>
            <div className="buttonHolder">
              <button onClick={toggleClickAddtocart}>To cash</button>
              <button onClick={toggleClickBuyNow}>Buy now</button>
            </div>
          </section>
        </div>
      </article>
    );
  });
};
