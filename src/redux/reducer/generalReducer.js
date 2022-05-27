import * as type from "../../constants";
const init = {
  loadingComponent: false,
  loadingBtn: false,
};

const generalReducer = (state = init, action) => {

  switch (action.type) {
    case type.SHOW_LOADING_BTN: {
      return {
        ...state,
        loadingBtn: true,
      };
    }
    case type.HIDE_LOADING_BTN: {
      return {
        ...state,
        loadingBtn: false,
      };
    }
    case type.SHOW_LOADING_COMPONENT: {
      return {
        ...state,
        loadingComponent: true,
      };
    }
    case type.HIDE_LOADING_COMPONENT: {
      return {
        ...state,
        loadingComponent: false,
      };
    }
    default:
      return { ...state };
  }
};

export default generalReducer;
