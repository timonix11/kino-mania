import { Link } from "@tanstack/react-router";
import { KMTextButton } from "../models/km_text_button";
import { KMLogo } from "./km_logo";
import { KMToggleThemeButton } from "./km_toggle_theme.button";

export const KMHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 h-14 border-b border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)]">
      <div className="flex items-center gap-4">
        <KMLogo />
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/test" className="[&.active]:font-bold">
          Test
        </Link>
      </div>
      <div className="flex gap-2">
        <KMToggleThemeButton />
        <KMTextButton>Увійти</KMTextButton>
      </div>
    </header>
  );
};
