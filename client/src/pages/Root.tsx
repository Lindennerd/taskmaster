import { Outlet } from "react-router-dom";
import { Footer } from "../components/UI/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";
import { Navbar } from "../components/Navbar";

export default function Root() {
  const { theme } = useTheme();

  return (
    <div
      className="dark:bg-neutral-800 dark:text-white transition-colors
     bg-gray-100 w-full min-h-screen relative"
    >
      <ToastContainer theme={theme ? "light" : "dark"} />
      <Navbar />
      <div className="px-2 pt-14 pb-12 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
