import { KMIconButton } from "../../models/km_icon_button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { refreshThemeCheck, toggleTheme } from "./themeTogglerSlice";
import { useEffect } from "react";

export const KMToggleThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.themeToggler.theme);
  const iconSize = 24;
  useEffect(() => {
    dispatch(refreshThemeCheck());
  }, []);
  return (
    <KMIconButton onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? (
        <SunIcon width={iconSize} height={iconSize} />
      ) : (
        <MoonIcon width={iconSize} height={iconSize} />
      )}
    </KMIconButton>
  );
};
