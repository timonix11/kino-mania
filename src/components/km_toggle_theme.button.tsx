import { useTheme } from "../app/themeProvider";
import { KMIconButton } from "../models/km_icon_button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const KMToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const iconSize = 24;
  return (
    <KMIconButton onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon width={iconSize} height={iconSize} />
      ) : (
        <MoonIcon width={iconSize} height={iconSize} />
      )}
    </KMIconButton>
  );
};
