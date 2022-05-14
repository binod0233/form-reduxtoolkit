import {
  ADD_USERCATEGORY,
  FETCH_USERCATEGORY,
  DELETE_USERCATEGORY,
  UPDATE_USERCATEGORY,
} from "./userType";
const axios = require("axios");
const api = process.env.REACT_APP_URL;

export const addUserCategory = (layout, name, capacity, status, image) => {
  console.log(layout, name, capacity, status, image);
  if (status === true) {
    var stat = "true";
  } else {
    stat = "false";
  }
  var OPTION = {
    url: `${api}`,

    method: "POST",
    data: { layout, name, capacity, status: stat, image },
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios(OPTION)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
  return {
    type: ADD_USERCATEGORY,
    payload: layout,
  };
};

export const fetchUserCategory = () => {
  return function (dispatch) {
    var OPTION = {
      url: `${api}`,

      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(OPTION)
      .then((res) => {
        const userCategory = res.data;
        dispatch(getUserCategory(userCategory));
      })
      .catch(
        (err) => {
          console.log(err);
        } // end of catch
      ); // end of axios
  }; // end of function
}; // end of fetchUserCategory

export const getUserCategory = (userCategory) => {
  return {
    type: FETCH_USERCATEGORY,
    payload: userCategory,
  };
};

export const deleteUserCategory = (id) => {
  var OPTION = {
    url: `${api}` + id,
    method: "DELETE",
    data: { id },
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios(OPTION)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: DELETE_USERCATEGORY,
    payload: id,
  };
};

export const updateUserCategory = (
  id,
  layout,
  name,
  capacity,
  status,
  image
) => {
  if (status === true) {
    var stat = "true";
  } else {
    stat = "false";
  }
  var OPTION = {
    url: `${api}` + id,

    method: "PUT",
    data: { layout, name, capacity, status: stat, image },
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios(OPTION)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: UPDATE_USERCATEGORY,
    payload: id,
  };
};
