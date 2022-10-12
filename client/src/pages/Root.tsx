import { Outlet } from "react-router-dom";
import { UnauthenticatedNavbar } from "../components/Navbar/Unauthenticated";
import { Footer } from "../components/UI/Footer";

export default function Root() {
  return (
    <div className="dark:bg-gray-700 dark:text-white transition-colors">
      <UnauthenticatedNavbar />
      <div className="w-screen h-screen px-2 py-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
