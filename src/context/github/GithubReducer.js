//state je initialState iz githubContexta koji se kasnije puni pa postaje novi state 
//action se sastoji od type (za switch case) i payloada (novi podaci)
const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

//initial state iz githubContexta
// const initialState = {
//     users: [],
//     loading: true,
//   };

export default githubReducer;
