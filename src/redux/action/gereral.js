import * as type from "../../constants";
export const showLoadingComponent = () => {
  return {
    type: type.SHOW_LOADING_COMPONENT,
  };
};
export const hideLoadingComponent = () => {
  return {
    type: type.HIDE_LOADING_COMPONENT,
  };
};
export const showLoadingBtn = () => {
  return {
    type: type.SHOW_LOADING_BTN,
  };
};
export const hideLoadingBtn = () => {
  return {
    type: type.HIDE_LOADING_BTN,
  };
};
