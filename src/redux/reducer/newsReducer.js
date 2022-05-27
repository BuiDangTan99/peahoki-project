import * as type from "../../constants";
const init = {
    news: [],
    detailNew: {},
    pagination: {
      totalResults : 0
    }
}

const newsReducer = (state = init, action) => {
  const { payload } = action;

  switch (action.type) {
    case type.GET_NEWS_SUCCESS: {
      return  {
        ...state,
        news:  [...payload.articles],
        pagination: {
          ...state.pagination,
          totalResults: payload.totalResults
        }
      };
    } 
    case 'RESET_STATE': {
      return init
    }
    default:
      return { ...state };
  }
};

export default newsReducer;
