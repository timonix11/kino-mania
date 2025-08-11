import { Link } from "@tanstack/react-router";
import { KMLogo } from "./km_logo";
import { KMToggleThemeButton } from "../features/themeToggler/km_toggle_theme_button";
import { KMTextButton } from "../models/km_text_button";
import { useState } from "react";
import KMModalAuth from "./km_modal_auth";

export const KMHeader = () => {
  const [onOpenLoginModal, setOnOpenLoginModal] = useState(false);
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
        <KMTextButton onClick={() => setOnOpenLoginModal(!onOpenLoginModal)}>
          Увійти
        </KMTextButton>
        {onOpenLoginModal ? (
          <KMModalAuth
            setOnOpenLoginModal={() => setOnOpenLoginModal(!onOpenLoginModal)}
          />
        ) : null}
      </div>
    </header>
  );
};
