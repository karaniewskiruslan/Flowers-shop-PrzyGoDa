import React, { useContext } from "react";
import flowers from "../../flowerslist/flowersList";
import { CART_RENDER_ACTION_TYPE } from "../../../redusers/cartOrderRender";
import { ObjectContext } from "../../../context/ObjectContext";
import { CartItemsContext } from "../../../context/CartContext";

export const FlowerCartSummary = () => {
  const { cartValue, setCartValue } = useContext(CartItemsContext);
  const { cartRender, dispatchRender } = useContext(ObjectContext);

  return cartRender.map((item) => {
    const quantitySrt = item.quantity;
    const itemSearchSrt = flowers.find((it) => it.id === item.id);
    const nmFlowersSrt = Object.keys(quantitySrt || {});

    let nmbItemsCount = 0;
    let nmbItemCost = 0;

    Object.entries(quantitySrt).forEach((el) => {
      nmbItemsCount += el[1];
      nmbItemCost +=
        el[1] *
        flowers.find((el) => el.id === item.id)?.prise[`option_${el[0]}`];
    });

    const onToggleRemoveButton = () => {
      let nmbDeletingItems = 0;
      let nmbDecrisingCost = 0;

      Object.entries(quantitySrt).forEach((el) => {
        nmbDeletingItems += el[1];
        nmbDecrisingCost +=
          el[1] *
          flowers.find((el) => el.id === item.id)?.prise[`option_${el[0]}`];
      });

      setCartValue({
        cartItem: cartValue.cartItem - nmbDeletingItems,
        cartCost: cartValue.cartCost - nmbDecrisingCost,
      });

      dispatchRender({
        type: CART_RENDER_ACTION_TYPE.REMOVE_POSITION,
        id: item.id,
      });
    };

    return (
      <section
        key={item.id}
        className="Flowers__Cart--Summary__PositionContainer"
      >
        <img src={itemSearchSrt?.img_src} alt="" />
        <article>
          <span>
            <div>{itemSearchSrt?.name}</div>
          </span>
          <span>
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
                      className="Flowers__Cart--Summary__PositionContainer--Info"
                    >
                      <span key={itemSearchSrt?.options[`option_${element}`]}>
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
            <div className="Flowers__Cart--Summary__PositionContainer--Total">
              <div>
                <span>Total:</span>
                <span>Items - x{nmbItemsCount}</span>
              </div>
              <div>Cost - {nmbItemCost.toFixed(2)}$ </div>
            </div>
          </span>
        </article>
        <div
          className="Flowers__Cart--Summary__PositionContainer--CloseButton"
          onClick={onToggleRemoveButton}
        ></div>
      </section>
    );
  });
};
