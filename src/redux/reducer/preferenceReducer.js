import * as type from "../../constants";
const init = {
    preference: ''
}

const preferenceReducer = (state = init, action) => {
  const { payload } = action;
  
  switch (action.type) {
    case type.POST_PREFERENCE_SUCCESS: {
      state= {
        ...state,
        preference: payload
      };
      break;
    }
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default preferenceReducer;
