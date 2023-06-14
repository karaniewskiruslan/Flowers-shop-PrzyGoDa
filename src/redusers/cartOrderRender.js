export const CART_RENDER_ACTION_TYPE = {
  ADDING_NEW_POS: "ADDING_NEW_POS",
  REMOVE_POSITION: "REMOVE_POSITION",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  ZEROING_CART: "ZEROING_CART",
};

export const cartOrderRenderState = [];

export const cartOrderRenderInitializer = (
  initialValue = cartOrderRenderState
) => JSON.parse(localStorage.getItem("shoppingCartArray")) || initialValue;

export const cartOrderRenderReduser = (state, action) => {
  switch (action.type) {
    case CART_RENDER_ACTION_TYPE.ADDING_NEW_POS: {
      return [
        ...state,
        {
          id: action.cart_Object.id,
          quantity: { ...action.cart_Object.quantity },
        },
      ];
    }

    case CART_RENDER_ACTION_TYPE.CHANGE_QUANTITY: {
      const abcd = state.find(
        (itm) => itm.id === action.cart_Object.id
      )?.quantity;
      return [
        ...state.map((item) => {
          if (item.id === action.cart_Object.id) {
            return {
              ...item,
              quantity: {
                ...abcd,
                [action.cart_Object.quantity]:
                  abcd[action.cart_Object.quantity] + 1,
              },
            };
          } else {
            return item;
          }
        }),
      ];
    }

    case CART_RENDER_ACTION_TYPE.REMOVE_POSITION: {
      return state.filter((el, id) => {
        return id !== state.indexOf(state.find((el) => el.id === action.id));
      });
    }

    case CART_RENDER_ACTION_TYPE.ZEROING_CART: {
      return cartOrderRenderState;
    }

    default:
      return state;
  }
};
