import { useAuth } from "../context/AuthContext";
import { LandingPage } from "./LandingPage";
import { UserHomePage } from "./UserHomePage";

export function HomePage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <UserHomePage />;
  } else {
    return <LandingPage />;
  }
}
