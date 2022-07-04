let initialState = {
  array: [],
  sizeOfArray: 80,
  animationSpeed: 1,
  sorted: false,
};

const SET_SPEED = "SET_SPEED";
const SET_SIZE_OF_ARRAY = "SET_SIZE_OF_ARRAY";
const RESET_ARRAY = "RESET_ARRAY";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ARRAY:
      return { ...state, array: action.payload };
    case SET_SPEED:
      return { ...state, animationSpeed: action.payload };
    case SET_SIZE_OF_ARRAY:
      return { ...state, sizeOfArray: action.payload };
    default:
      return state;
  }
};

export const setSpeedAC = (payload) => ({ type: SET_SPEED, payload });
export const resetArrAC = (payload) => ({ type: RESET_ARRAY, payload });
export const setSizeOfArrAC = (payload) => ({
  type: SET_SIZE_OF_ARRAY,
  payload,
});
