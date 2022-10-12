import {
  createContext,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserOutput } from "../gql/graphql";

type AuthContextData = {
  isAuthenticated: boolean;
  user: UserOutput | undefined;
  setUser: React.Dispatch<SetStateAction<UserOutput | undefined>>;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<UserOutput | undefined>(() => {
    if (!localStorage.userInfo) return undefined;
    else return JSON.parse(localStorage.userInfo) as UserOutput;
  });

  const [isAuthenticated] = useState(user !== null && user !== undefined);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
