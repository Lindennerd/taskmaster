import { Outlet } from "react-router-dom";
import { UnauthenticatedNavbar } from "../components/Navbar/Unauthenticated";

export default function Root() {
  return (
    <>
      <UnauthenticatedNavbar />
      <div className="mt-12">
        <Outlet />
      </div>
    </>
  );
}
