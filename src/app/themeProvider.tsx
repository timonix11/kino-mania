import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext<{
  theme: string | null;
  toggleTheme: () => void;
}>({ theme: null, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );
  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    } else {
      const initialTheme = (document.documentElement.className =
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setTheme(initialTheme);
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
