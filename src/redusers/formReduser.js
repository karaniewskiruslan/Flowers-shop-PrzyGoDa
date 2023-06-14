export const STATEPROPS = {
  TEXT_CHANGING: "TEXT_CHANGING",
  RADIO_CHANGED: "RADIO_CHANGED",
};

const date = new Date();

export const delivery_state = {
  city: "",
  address: "",
  deliveryData: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
  deliveryTime: "12-14",
  comment: "",
  typeOfOrder: "",
  promocode: "",
};

export const delivery_reduser = (state, action) => {
  switch (action.type) {
    case STATEPROPS.TEXT_CHANGING: {
      return {
        ...state,
        [action.devinformation.name]: action.devinformation.value,
      };
    }
    case STATEPROPS.RADIO_CHANGED: {
      return { ...state, typeOfOrder: action.radioChange };
    }
    default:
      return state;
  }
};
