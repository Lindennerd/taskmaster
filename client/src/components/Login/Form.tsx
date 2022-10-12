import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { LoginType, UserOutput } from "../../gql/graphql";
import { Card } from "../UI/Card";
import { useState } from "react";
import { toast } from "react-toastify";

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginType!) {
    login(input: $input) {
      id
      name
      email
      image
    }
  }
`;

export function LoginForm() {
  const [loginForm, setLoginForm] = useState<LoginType>();
  const [loginFunction, { data, loading }] = useMutation<UserOutput>(
    LOGIN_MUTATION,
    {
      onError(error) {
        console.error(error);
        toast.error("Login Failed");
      },
    }
  );

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    loginFunction({
      variables: {
        input: loginForm,
      },
    });
  }

  return (
    <Card title="Log In">
      <form onSubmit={(e) => onSubmit(e)} className="p-2 flex flex-col gap-2">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={loginForm?.email ?? ""}
            onChange={(e) =>
              setLoginForm((form) => ({ ...form, email: e.target.value }))
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginForm?.password ?? ""}
            onChange={(e) =>
              setLoginForm((form) => ({ ...form, password: e.target.value }))
            }
          />
        </div>
        <div className="form-control ">
          <button disabled={loading}>
            {loading ? "Loging you in..." : "Login"}
          </button>
        </div>
      </form>
    </Card>
  );
}
