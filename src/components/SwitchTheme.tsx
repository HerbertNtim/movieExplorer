"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa6";

const SwitchTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="cursor-pointer">
      {mounted && (currentTheme === "dark" ? (
        <FaLightbulb onClick={() => setTheme("light")} className="text-3xl text-amber-400" />
      ) : (
        <FaLightbulb
          onClick={() => setTheme("dark")}
          className="text-3xl text-gray-900"
        />
      ))}
    </div>
  );
};

export default SwitchTheme;
