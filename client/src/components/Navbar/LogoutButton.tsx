import { gql, useMutation } from "@apollo/client";
import { useAuth } from "../../context/AuthContext";

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export function LogoutButton() {
  const [logoutFn, { loading }] = useMutation(LOGOUT_MUTATION, {
    onError(error, clientOptions) {
      console.log(error);
    },
  });
  const { setUser } = useAuth();

  function logout() {
    console.log("clicked");

    logoutFn();
    setUser(undefined);
  }

  return <button onClick={(e) => logout()}>Logout</button>;
}
