import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
// const initialDarkMode = () => {
//   const prefersDarkMode = window.matchMedia(
//     "(prefers-colors-scheme:dark)"
//   ).matches;
//   const storedDarkMode = localStorage.getItem("darkTheme") === "true";

//   return storedDarkMode || prefersDarkMode;
// };

export const AppProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkTheme");
    return storedDarkMode === "true" || prefersDarkMode;
  });
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const [searchTerm, setSearchTerm] = useState("cat");
  const [images, setImages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,

        handleSubmit,
        images,
        setImages,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
