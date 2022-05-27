import * as type from '../../constants'
export const getNews = (payload) =>{
    return {
        type: type.GET_NEWS,
        payload
      };
}
export const getNewsSuccess = (payload) => {
  return {
    type: type.GET_NEWS_SUCCESS,
    payload: payload,
  };
};

export const resetState = () => {
  return{
    type: 'RESET_STATE'
  }
}