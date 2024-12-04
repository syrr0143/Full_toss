import React, { createContext, useState, useContext, useEffect } from "react";
import teams from "../assets/TeamTheme/teamTheme.js"; // Assuming this path is correct

// Create Theme Context
const ThemeContext = createContext();

// The ThemeProvider to manage the theme state
export const ThemeProvider = ({ children, initialTeam = "RCB" }) => {
  const [theme, setTheme] = useState(teams[initialTeam] || teams["RCB"]);

  // Function to update the theme based on team selection
  const teamTheme = (team) => {
    setTheme(teams[team] || teams["RCB"]); // Fallback to "RCB" if team doesn't exist
  };

  return (
    <ThemeContext.Provider value={{ theme, teamTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme in components
export const useTheme = () => useContext(ThemeContext);
