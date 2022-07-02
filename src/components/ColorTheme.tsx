import { useState, useCallback, useEffect } from "react";
import { TbMoon, TbSun } from 'react-icons/tb'

const STORAGE_KEY = "PREFERRED_COLOR_THEME";

const getCurrentPreferredColor = (): "light" | "dark" =>
  localStorage.getItem(STORAGE_KEY) != null
    ? (localStorage.getItem(STORAGE_KEY) as "light" | "dark")
    : matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const useColorTheme = (): ['light' | 'dark', () => void] => {
  const [theme, setTheme] = useState(getCurrentPreferredColor);

  const toggleTheme = useCallback(() => {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme !== "light");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default function Counter() {
  const [theme, handleClick] = useColorTheme();

  return (
    <button
      className="hover:dark:text-primary-500 hover:text-primary-800 hover:dark:bg-white/5 hover:bg-gray-800/5 rounded-xl p-2 transition-all"
      onClick={handleClick}
    >
      {theme === 'light' ? <TbMoon size="24" /> : <TbSun size="24" />}
    </button>
  );
}
