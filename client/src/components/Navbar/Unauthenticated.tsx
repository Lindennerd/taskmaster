import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";

export function UnauthenticatedNavbar() {
  return (
    <div className="flex gap-4 items-center box-border">
      <ThemeSwitcher />
      <Link to="/login" className="hover:border-b-2 transition-all">
        Login
      </Link>
      <Link to="/register" className="hover:border-b-2 transition-all">
        Register
      </Link>
    </div>
  );
}
