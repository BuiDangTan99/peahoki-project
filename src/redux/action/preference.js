import * as type from '../../constants'
export const postPreference = (payload) =>{
    return {
        type: type.POST_PREFERENCE,
        payload
      };
}
export const postPreferenceSuccess = (payload) => {
  return {
    type: type.POST_PREFERENCE_SUCCESS,
    payload: payload,
  };
};