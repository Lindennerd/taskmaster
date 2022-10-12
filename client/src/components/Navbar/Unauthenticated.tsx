import { Link } from "react-router-dom";

export function UnauthenticatedNavbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center p-2 shadow-sm">
      <div>
        <Link to="/">Task Master</Link>
      </div>
      <div className="space-x-1">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
