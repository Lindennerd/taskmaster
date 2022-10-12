import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";

export function UnauthenticatedNavbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center p-2 shadow-sm bg-white dark:bg-gray-800 z-10">
      <div>
        <Link to="/" className="hover:border-b-2 transition-all">
          Task Master
        </Link>
      </div>
      <div className="flex gap-4 items-center box-border">
        <ThemeSwitcher />
        <Link to="/login" className="hover:border-b-2 transition-all">
          Login
        </Link>
        <Link to="/register" className="hover:border-b-2 transition-all">
          Register
        </Link>
      </div>
    </div>
  );
}
