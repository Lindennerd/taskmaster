import { useTheme } from "../../context/ThemeContext";
import { DarkMode, SunOne } from "@icon-park/react";

export function ThemeSwitcher({
  displayThemeName,
}: {
  displayThemeName?: boolean;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark:hover:bg-secondary_dark hover:bg-secondary_light p-1 rounded-full flex items-center gap-3"
      onClick={(e) => setTheme(!theme)}
    >
      {!!displayThemeName && (theme ? "Dark" : "Light")}

      {theme ? (
        <DarkMode className="text-2xl" />
      ) : (
        <SunOne className="text-2xl" />
      )}
    </button>
  );
}
