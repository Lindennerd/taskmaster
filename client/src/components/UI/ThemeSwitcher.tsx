import { useTheme } from "../../context/ThemeContext";
import { DarkMode, SunOne } from "@icon-park/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark:hover:bg-secondary_dark hover:bg-secondary_light p-1 rounded-full"
      onClick={(e) => setTheme(!theme)}
    >
      {theme ? (
        <DarkMode className="text-2xl" />
      ) : (
        <SunOne className="text-2xl" />
      )}
    </button>
  );
}
