//state je initialState iz githubContexta koji se kasnije puni pa postaje novi state
//action se sastoji od --type-- (za switch case) i --payloada-- (novi podaci)
const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "SET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USERS":
      return { ...state, users: [] };
    default:
      return {
        ...state,
      };
  }
};

//initial state iz githubContexta
// const initialState = {
//     users: [],
//     loading: true,
//   };

export default githubReducer;
