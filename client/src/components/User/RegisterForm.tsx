import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NewUser } from "../../gql/graphql";
import { Card } from "../UI/Card";

const REGISTER_MUTATTION = gql`
  mutation RegisterUser($input: NewUser!) {
    addUser(input: $input) {
      id
      name
      email
      image
    }
  }
`;

export function RegisterForm() {
  const [registerForm, setRegisterForm] = useState<
    NewUser & { confirmPassword: string }
  >({} as NewUser & { confirmPassword: string });

  const navigate = useNavigate();

  const [registerUser, { data, loading }] = useMutation(REGISTER_MUTATTION, {
    onError(error) {
      console.error(error);
      toast.error("Ooops! We're having touble registering you in...");
    },
    onCompleted(data) {
      if (data) {
        toast.success("User created!");
        navigate("/login");
      }
    },
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      toast.warn("Passwords dont match!");
    }

    const { confirmPassword, ...rest } = registerForm;

    registerUser({
      variables: {
        input: rest,
      },
    });
  }

  return (
    <div className="mt-[5vh]">
      <Card title="Register">
        <form className="p-2 flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              required={true}
              value={registerForm?.name}
              onChange={(e) =>
                setRegisterForm((form) => ({ ...form, name: e.target.value }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              required={true}
              value={registerForm?.email}
              onChange={(e) =>
                setRegisterForm((form) => ({ ...form, email: e.target.value }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="email"
              required={true}
              value={registerForm?.password}
              onChange={(e) =>
                setRegisterForm((form) => ({
                  ...form,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password">Confirm your password</label>
            <input
              type="password"
              id="confirm-password"
              required={true}
              value={registerForm?.confirmPassword}
              onChange={(e) =>
                setRegisterForm((form) => ({
                  ...form,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-control ">
            <button disabled={loading}>
              {loading ? "Saving your information..." : "Register"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
