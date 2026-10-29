"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode" title="Toggle light and dark mode">
      <span className="theme-to-light" aria-hidden="true">☀</span>
      <span className="theme-to-dark" aria-hidden="true">☾</span>
    </button>
  );
}
