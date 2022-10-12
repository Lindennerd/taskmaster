import { Outlet } from "react-router-dom";
import { UnauthenticatedNavbar } from "../components/Navbar/Unauthenticated";
import { Footer } from "../components/UI/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

export default function Root() {
  const { theme } = useTheme();

  return (
    <div className="dark:bg-gray-700 dark:text-white transition-colors bg-gray-100">
      <ToastContainer theme={theme ? "light" : "dark"} />
      <UnauthenticatedNavbar />
      <div className="w-screen h-screen px-2 py-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
