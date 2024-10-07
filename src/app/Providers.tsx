"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen select-none transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
