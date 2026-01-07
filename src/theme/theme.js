export const THEME_STORAGE_KEY = "portfolio-theme";

export const ThemeSelection = {
  light: "light",
  dark: "dark",
  system: "system",
};

export function isThemeSelection(value) {
  return value === "light" || value === "dark" || value === "system";
}

export function getStoredThemeSelection() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeSelection(stored)) return stored;
  } catch {
    // ignore
  }
  // Always default to dark, never system
  return "dark";
}

export function setStoredThemeSelection(selection) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, selection);
  } catch {
    // ignore
  }
}

export function getSystemTheme() {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyThemeSelection(selection) {
  const resolved = selection === "system" ? getSystemTheme() : selection;

  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themeSelection = selection;
  }

  return resolved;
}

export function onSystemThemeChange(callback) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => callback(getSystemTheme());

  if (mql.addEventListener) mql.addEventListener("change", handler);
  else mql.addListener(handler);

  return () => {
    if (mql.removeEventListener) mql.removeEventListener("change", handler);
    else mql.removeListener(handler);
  };
}

export function bootstrapTheme() {
  // Always force dark on first load if no user choice
  const selection = getStoredThemeSelection();
  applyThemeSelection(selection);
}
