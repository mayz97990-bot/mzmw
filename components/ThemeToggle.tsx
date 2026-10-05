"use client";

type Theme = "light" | "dark";

export function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    const nextTheme: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
