import { Outlet } from "react-router-dom";
import { UnauthenticatedNavbar } from "../components/Navbar/Unauthenticated";
import { Footer } from "../components/UI/Footer";

export default function Root() {
  return (
    <>
      <UnauthenticatedNavbar />
      <div className="mt-12 w-screen h-screen p-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
