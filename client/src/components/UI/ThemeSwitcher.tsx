import { useTheme } from "../../context/ThemeContext";
import { DarkMode, SunOne } from "@icon-park/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark:hover:bg-slate-700 hover:bg-slate-100 p-1 rounded-full"
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
