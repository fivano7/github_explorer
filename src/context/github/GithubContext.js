import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // users i loading state ćemo zamijeniti reducerom koji sve to radi odjednom
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);



  //JEDAN
  const getUser = async (text) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const fetchedUser = await response.json();

      dispatch({
        type: "SET_USER",
        payload: fetchedUser, //na sebi ima parametar "login" koji je username
      });
    }
  };

    //VIŠE NJIH
    const getUserRepos = async (text) => {
      setLoading();

      const params = new URLSearchParams({
        sort: "created",
        per_page: 10
      });
  
      const response = await fetch(`${GITHUB_URL}/users/${text}/repos?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
  
      const data = await response.json();
      //dispatch prima type i payload, payload su podaci za obra
      dispatch({
        type: "SET_REPOS",
        payload: data,
      });

    };

  const clearUsers = () => {
    dispatch({
      type: "DELETE_USERS",
    });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
