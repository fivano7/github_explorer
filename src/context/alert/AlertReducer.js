//state je trenutno stanje, kao u useState, a action se sastoji od type (SET_ALERT) i payloada koji se sastoji od {msg,type}
const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload; //vraćamo što je poslano
    case "REMOVE_ALERT":
      return null; //poništavamo stanje
    default:
      return state; //vraćamo početno stanje
  }
};

export default alertReducer;
