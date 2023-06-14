import React from "react";
import { CartItemsContext } from "../../../context/CartContext";
import { ObjectContext } from "../../../context/ObjectContext";
import flowers from "../../flowerslist/flowersList";
import { useState, useContext } from "react";

export const ConfirmPage = () => {
  const { setSmrOpenTrue, cartValue } = useContext(CartItemsContext);
  const { cartRender } = useContext(ObjectContext);
  const [scrollTopProve, setScrollTopProve] = useState(true);
  const [scrollDownProve, setScrollDownProve] = useState(false);

  const toggleButtonClose = () => {
    setSmrOpenTrue((prev) => !prev);
  };

  const toggleButtonAsseptOrder = () => {
    document.querySelector("dialog").showModal();
    toggleButtonClose();
  };

  const toggleOrderScroll = (e) => {
    const htmlFontSize = document.querySelector("html");
    const bottomOfScroll =
      parseInt(
        window
          .getComputedStyle(htmlFontSize, null)
          .getPropertyValue("font-size")
      ) *
      20 *
      (cartRender.length - 1);

    e.target.scrollTop <= 20
      ? setScrollTopProve(true)
      : setScrollTopProve(false);

    e.target.scrollTop >= bottomOfScroll
      ? setScrollDownProve(true)
      : setScrollDownProve(false);
  };

  return (
    <section className="flower-assept">
      <div
        className="flower-assept__container"
        data-length_proove={cartRender.length > 1 ? true : false}
        data-ontop={scrollTopProve}
        data-onbottom={scrollDownProve}
      >
        <h2>Asseption page</h2>
        <section
          className="flower-assept__container--order"
          onScroll={toggleOrderScroll}
        >
          {cartRender.map((item) => {
            const quantitySrt = item.quantity;
            const itemSearchSrt = flowers.find((it) => it.id === item.id);
            const nmFlowersSrt = Object.keys(quantitySrt || {});

            let nmbDeletingItems = 0;
            let nmbDecrisingCost = 0;

            Object.entries(quantitySrt).forEach((el) => {
              nmbDeletingItems += el[1];
              nmbDecrisingCost +=
                el[1] *
                flowers.find((el) => el.id === item.id)?.prise[
                  `option_${el[0]}`
                ];
            });

            return (
              <section
                key={item.id}
                className="flower-assept__container--order__PositionContainer"
              >
                <img src={itemSearchSrt?.img_src} alt="" />
                <article>
                  <h3>{itemSearchSrt?.name}</h3>
                  <article>
                    {nmFlowersSrt === {} ? (
                      <></>
                    ) : (
                      nmFlowersSrt.map((element) => {
                        if (quantitySrt[element] === 0) {
                          return <></>;
                        } else {
                          return (
                            <div
                              key={element}
                              className="flower-assept__container--order__PositionContainer--Info"
                            >
                              <span
                                key={
                                  itemSearchSrt?.options[`option_${element}`]
                                }
                              >
                                {itemSearchSrt?.options[`option_${element}`]}
                                {" - "}
                                {itemSearchSrt?.prise[`option_${element}`]}$
                              </span>
                              <span>x{quantitySrt[element]}</span>
                            </div>
                          );
                        }
                      })
                    )}
                    <div className="flower-assept__container--order__PositionContainer--Total">
                      <h3>Total:</h3>
                      <span>Items - x{nmbDeletingItems}</span>
                      <div>Cost - {nmbDecrisingCost.toFixed(2)}$ </div>
                    </div>
                  </article>
                </article>
              </section>
            );
          })}
        </section>
        <div>{`Cart cost: ${cartValue.cartCost.toFixed(2)}$`}</div>
        <div className="flower-assept__container--buttonHolder">
          <button onClick={toggleButtonAsseptOrder}>Assept order</button>
        </div>
        <div className="closeButton" onClick={toggleButtonClose}></div>
      </div>
    </section>
  );
};
