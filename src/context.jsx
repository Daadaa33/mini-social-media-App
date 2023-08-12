import {
  Children,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";

const AuthContext = createContext();
const PostContext = createContext({
  posts: [],
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const initialState = useContext(PostContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </PostContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const postcode = () => {
  return useContext(PostContext);
};


// i love coding