import {
  ADD_USERCATEGORY,
  FETCH_USERCATEGORY,
  DELETE_USERCATEGORY,
  UPDATE_USERCATEGORY,
} from "../action/userType";
const initialState = {
  userCategory: [],
  image: null,
  layout: "",
  id: NaN,
  name: "",
  capacity: NaN,
  status: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERCATEGORY:
      return {
        ...state,
        userCategory: [...state.userCategory, action.payload],
      };
    case FETCH_USERCATEGORY:
      return {
        ...state,
        userCategory: action.payload,
      };
    case DELETE_USERCATEGORY:
      return {
        ...state,
        userCategory: state.userCategory.filter(
          (item) => item.id !== action.payload
        ),
      };
    case UPDATE_USERCATEGORY:
      return {
        ...state,
        userCategory: state.userCategory.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
export default userReducer;
