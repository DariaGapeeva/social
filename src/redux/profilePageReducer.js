import { profileApi } from "./../API/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE = "ADD-LIKE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  dataPost: [
    {
      id: 1,
      message: "Hello, my name is Mikka",
      countlike: 10,
      url:
        "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      message: "I want to go to ocean",
      countlike: 15,
      url:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      message: "Hiiiiii",
      countlike: 0,
      url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg",
    },
    // { id: 4, message: 'By', countlike: 0, url: 'https://www.seedsavers.org/site/img/seo-images/0184-purity-cosmos-flower.jpg' },
    // { id: 5, message: 'I am super star', countlike: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3v_T28nnLOi9Fnq-s0lPdWeYNYw-1mMIGNw&usqp=CAU' },
    // { id: 6, message: 'I am cool', countlike: 9, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRko_ViM1KvhbApSuwBSJS1ZpgEyMdOU2qKQ&usqp=CAU' },
    // { id: 7, message: 'You are super girl', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },
    // { id: 8, message: 'I am here. I am here', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' }
  ],
  profile: null,
  status: "",
  countPosts: 3,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.countPosts + 1,
        message: action.post,
        countlike: 0,
        countPosts: state.countPosts + 1,
        url:
          "https://www.seedsavers.org/site/img/seo-images/0184-purity-cosmos-flower.jpg",
      };
      return {
        ...state,
        dataPost: [...state.dataPost, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        dataPost: state.dataPost.filter((item) => item.id !== action.id),
      };
    }

    case ADD_LIKE: {
      let stateCopy = {
        ...state,
        dataPost: state.dataPost.map((item) =>
          item.id === action.id
            ? { ...item, countlike: item.countlike + 1 }
            : item
        ),
      };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addNewLike = (id) => ({ type: ADD_LIKE, id: id });
export const addPost = (post) => ({ type: ADD_POST, post });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => dispatch(setUserStatus(data)));
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    profileApi
      .getProfile(userId)
      .then((data) => dispatch(setUserProfile(data)));
  };
};

export default profilePageReducer;
