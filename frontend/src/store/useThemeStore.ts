import { create } from "zustand";
import { Theme, THEMES } from "../constants";

export const useThemeStore = create<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>((set) => ({
  theme: (localStorage.getItem("chat-theme") as Theme) || "coffee",
  setTheme: (theme) => {
    if (THEMES.includes(theme)) {
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    } else {
      console.error(`Invalid theme: ${theme}`);
    }
  },
}));