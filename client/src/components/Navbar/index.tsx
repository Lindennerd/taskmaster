import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";
import { AuthenticatedNavbar } from "./Authenticated";
import { UnauthenticatedNavbar } from "./Unauthenticated";

export function Navbar() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="fixed top-0 w-full flex justify-between items-center p-2 shadow-sm text-white bg-primary_light dark:bg-primary_dark z-10">
      <div>
        <Link to="/" className="hover:border-b-2 transition-all">
          Task Master
        </Link>
      </div>
      {isAuthenticated ? <AuthenticatedNavbar /> : <UnauthenticatedNavbar />}
    </div>
  );
}
