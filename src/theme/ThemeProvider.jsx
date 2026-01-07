import React from "react";
import {
  applyThemeSelection,
  getStoredThemeSelection,
  onSystemThemeChange,
  setStoredThemeSelection,
} from "./theme";

const ThemeContext = React.createContext(null);

export function ThemeProvider({ children }) {
  const [selection, setSelection] = React.useState(() =>
    getStoredThemeSelection()
  );
  const [resolvedTheme, setResolvedTheme] = React.useState(() =>
    applyThemeSelection(getStoredThemeSelection())
  );

  React.useEffect(() => {
    setStoredThemeSelection(selection);
    setResolvedTheme(applyThemeSelection(selection));

    if (selection !== "system") return;

    return onSystemThemeChange(() => {
      setResolvedTheme(applyThemeSelection("system"));
    });
  }, [selection]);

  const value = React.useMemo(
    () => ({ selection, setSelection, resolvedTheme }),
    [selection, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
