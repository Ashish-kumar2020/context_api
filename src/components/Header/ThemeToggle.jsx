import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <Button onClick={handleTheme} variant="ghost">
      {theme ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
