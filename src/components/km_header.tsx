import { Link } from "@tanstack/react-router";
import { KMTextButton } from "../models/km_text_button";
import { KMLogo } from "./km_logo";
import { KMToggleThemeButton } from "../features/themeToggler/km_toggle_theme_button";

export const KMHeader = () => {
  return (
    <header className="flex justify-between items-center px-6 border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] border-b h-14">
      <div className="flex items-center gap-4">
        <KMLogo />
        <Link to="/" className="link-border">
          Головна
        </Link>
        <Link to="/test" className="link-border">
          Про нас
        </Link>
      </div>
      <div className="flex gap-2">
        <KMToggleThemeButton />
        <KMTextButton
          onClick={() => {
            console.log("asdasd");
          }}
        >
          Увійти
        </KMTextButton>
      </div>
    </header>
  );
};
