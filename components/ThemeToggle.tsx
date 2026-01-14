"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = stored === "dark" || (!stored && prefersDark);
        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle("dark", shouldBeDark);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle("dark", newIsDark);
        localStorage.setItem("theme", newIsDark ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 rounded-full bg-card border border-border shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={`absolute inset-0 w-5 h-5 text-secondary transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                        }`}
                />
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isDark ? "Light mode" : "Dark mode"}
            </span>
        </button>
    );
};

export default ThemeToggle;
