import { LoginForm } from "../components/Login/Form";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center justify-items-center">
      <LoginForm />
      {user?.name}
    </div>
  );
}
