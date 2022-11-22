import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  //initial state je null i nakon 3 sekunde od prikazivanja 
  //će uvijek biti null. dok nije null je {msg, type}
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //text alerta, tip alerta
  const setAlert = (msg, type) => {
    //prikaži
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    //za 3 sec sakrij
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
